import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { anhuai } from './interfaces/pi.interface';
import dataSource from './data';

@Controller()
export class PiControll {
  private readonly items: anhuai.esr.grpc.PiItem[] = dataSource;
  @GrpcMethod('Pi')
  findOne(data: anhuai.esr.grpc.PiIdentifier): anhuai.esr.grpc.PiItem {
    return this.items.find(({ id }) => id === data.piId);
  }

  @GrpcMethod('Pi')
  findAll(data: anhuai.esr.grpc.PisQuery): anhuai.esr.grpc.PiItems {
    console.log(data);
    return {
      items: this.items,
      page: 3,
      size: this.items.length,
    };
  }

  @GrpcMethod('Pi')
  insert(data: anhuai.esr.grpc.PiForm): anhuai.esr.grpc.PiIdentifier {
    console.log(data);
    const insertId = this.items.length + 1;

    this.items.push({
      ...data,
      id: insertId
    });
    return {
      piId: insertId
    }
  }

  @GrpcMethod('Pi')
  update(data: anhuai.esr.grpc.PiForm): anhuai.esr.grpc.PiIdentifier {
    const updateId = data.id;

    const updateIndex = this.items.findIndex(v => v.id === updateId);
    if (updateIndex > -1) {
      this.items[updateIndex] = {
        ...this.items[updateIndex],
        ...data
      }
    }

    return {
      piId: updateId
    }
  }

  @GrpcStreamMethod('Pi')
  delete(data$: Observable<anhuai.esr.grpc.PiIdentifier>): number {
    const pi$ = new Subject<number>();

    const onNext = (param: anhuai.esr.grpc.PiIdentifier) => {
      const deleteIndex = this.items.findIndex(({ id }) => id === param.piId);
      if (deleteIndex > -1) {
        delete this.items[deleteIndex]
      }
      pi$.next(deleteIndex);
    };

    const onComplete = () => pi$.complete();

    data$.subscribe({
      next: onNext,
      complete: onComplete,
    });

    return 200;
  }
}
