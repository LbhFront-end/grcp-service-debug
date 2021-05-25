/**
 * This file is auto-generated by nestjs-proto-gen-ts
 */

import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export namespace anhuai {
  export namespace esr {
    export namespace grpc {
      export interface Pi {
        findOne(data: PiIdentifier, metadata?: Metadata): Observable<PiItem>;
        findAll(data: PisQuery, metadata?: Metadata): Observable<PiItems>;
        insert(data: PiForm, metadata?: Metadata): Observable<PiIdentifier>;
        update(data: PiForm, metadata?: Metadata): Observable<PiIdentifier>;
        delete(data: PiIdentifier, metadata?: Metadata): Observable<number>;
      }
      export interface PiIdentifier {
        piId?: number;
        piCode?: string;
      }
      export interface PiItem {
        // 序号
        id?: number;
        // 订单编号，唯一
        piCode?: string;
        // 出口商ID
        exporterId?: number;
        // 客户类型
        exporterType?: grpc.ExporterType;
        // 订单联系人
        contact?: string;
        // 订单联系电话
        telephone?: string;
        // PI号码，唯一（基于supplier_id）
        piNo?: string;
        // PI日期
        piDate?: string;
        // 买方名称
        buyerName?: string;
        // 买方地址
        buyerAddr?: string;
        // 备注
        remark?: string;
        // 运输方式code
        trafMode?: string;
        // 出口口岸（起运港）
        iePort?: string;
        // 指运港code（目的港）
        cusPort?: string;
        // 成交方式code
        transMode?: string;
        // 订单总金额
        amt?: number;
        // 币制code
        currency?: string;
        // 抵运国
        tradeCountry?: string;
        // 贸易国code
        tradeArea?: string;
        // 结汇方式
        lcMode?: string;
        // 其他结汇方式
        lcModeOther?: string;
        // 包装种类
        wrapType?: string;
        // 总体积（CBM）
        volume?: number;
        // 总净重（KG）
        netWet?: number;
        // 唛头
        mark?: string;
        // 是否拼箱
        lcl?: boolean;
        // 20GP数量
        container20gp?: number;
        // 40GP数量
        container40gp?: number;
        // 40HC数量
        container40hc?: number;
        // 45HC数量
        container45hc?: number;
        // 交货期
        deliveryDate?: string;
        // PI文件
        piFile?: string;
        // 业务专员ID[运营端]
        clerkId?: number;
        // 业务专员[运营端]
        clerk?: string;
        // 添加者用户
        insUser?: string;
        // 添加日期
        insDate?: string;
        // 状态
        status?: grpc.Status;
        // 审核进度
        checkStep?: grpc.CheckStep;
      }
      export interface PiForm {
        id?: number;
        send?: boolean;
        clerkId?: number;
        clerk?: string;
        contact?: string;
        telephone?: string;
        piNo?: string;
        piDate?: string;
        buyerName?: string;
        buyerAddr?: string;
        remark?: string;
        trafMode?: string;
        iePort?: string;
        cusPort?: string;
        transMode?: string;
        amt?: number;
        currency?: string;
        tradeCountry?: string;
        tradeArea?: string;
        lcMode?: string;
        lcModeOther?: string;
        wrapType?: string;
        volume?: number;
        netWet?: number;
        mark?: string;
        lcl?: boolean;
        container20gp?: number;
        container40gp?: number;
        container40hc?: number;
        container45hc?: number;
        deliveryDate?: string;
        piFile?: string;
        status?: grpc.Status;
        checkStep?: grpc.CheckStep;
      }
      export interface PisQuery {
        page?: number;
        size?: number;
        sort?: { [key: string]: boolean };
        exporterId?: number;
        exporterType?: grpc.ExporterType;
        piCode?: string;
        piNo?: string;
        lPiDate?: string;
        buyerName?: string;
        trafMode?: string;
        iePort?: string;
        cusPort?: string;
        transMode?: string;
        currency?: string;
        tradeCountry?: string;
        tradeArea?: string;
        lcMode?: string;
        lDeliveryDate?: string;
        insUser?: string;
        insDate?: string;
        checkStep?: grpc.CheckStep;
        status?: grpc.Status;
        ids?: number[];
        codes?: string[];
        rPiDate?: string;
        rDeliveryDate?: string;
      }
      export interface PiItems {
        page?: number;
        size?: number;
        items?: grpc.PiItem[];
      }
      // 状态
      export enum Status {
        // 已启用
        ENABLED = 0,
        // 已停用
        DISABLED = 1,
        // 已删除
        DELETED = 2,
      }
      // 性别
      export enum Sex {
        // 男
        MALE = 0,
        // 女
        FEMALE = 2,
      }
      // 客户端类型
      export enum ClientType {
        // 运营端
        PLATFORM = 0,
        // 出口商
        EXPORTER = 1,
        // 发货人(外贸公司)
        CONSIGNOR = 2,
        // 承运商
        CARRIER = 3,
      }
      // 出口商类型
      export enum ExporterType {
        // 工厂
        FACTORY = 0,
        // 贸易商
        MERCHANT = 1,
        // SOHO
        SOHO = 2,
      }
      // 信息服务方式
      export enum SaasType {
        // 基础版
        COMMUNITY = 0,
        // 专业版
        PROFESSIONAL = 1,
        // 企业版
        ENTERPRISE = 2,
      }
      // 默认进入系统
      export enum DefaultView {
        // exporterAdmin 出口商管理中心
        EA = 0,
        // consignorSales 综服企业-客户中心
        CS = 1,
        // consignorCost 综服企业-收汇退税
        CC = 2,
        // consignorAdmin 综服企业-系统管理
        CA = 3,
        // platformService 运营系统-客服中心
        PS = 4,
        // platformCost 运营系统-结算中心
        PC = 5,
        // platformAdmin 运营系统-系统管理
        PA = 6,
        // platformUser 运营系统-用户中心
        PU = 7,
      }
      // 录入方式
      export enum InputType {
        // 客户申请
        APPLY = 0,
        // 中供提供
        SUPPLY = 1,
        // 综服提供
        INTSERV = 2,
      }
      // 销售单位类型
      export enum OwnerType {
        // 生产型
        OwnerType_FACTORY = 0,
        // 贸易型
        OwnerType_MERCHANT = 1,
      }
      // 审核进度
      export enum CheckStep {
        // 未提交
        CheckStep_DRAFT = 0,
        // 待审核
        CheckStep_CHECK = 1,
        // 审核通过
        CheckStep_PASS = 2,
        // 返回修改
        CheckStep_RETURN = 3,
        // 驳回
        CheckStep_REJECT = 4,
      }
      // 报关单进度
      export enum DecStep {
        // 草拟
        DecStep_DRAFT = 0,
        // 待审核
        DecStep_CHECK = 1,
        // 返回修改
        DecStep_RETURN = 2,
        // 返回修改
        DecStep_CONFIRM = 3,
        // 撤回
        DecStep_WITHDRAW = 4,
        // 待报关
        DecStep_DECLARE = 5,
        // 报关中
        DecStep_DECLARING = 6,
        // 已放行
        DecStep_PASS = 7,
        // 已结关
        DecStep_CLEARANCE = 8,
      }
      // 报关申报方式
      export enum DecType {
        // ESR代理申报
        ESRDEC = 0,
        // 自主申报
        OTHERDEC = 1,
      }
      // 服务方式
      export enum ContractType {
        // 传统外贸服务
        TRADITIONSERVICE = 0,
        // 外贸综合服务
        MODERNSERVICE = 1,
      }
      // 退税进度
      export enum TaxbackStep {
        // 草拟
        TaxbackStep_DRAFT = 0,
        // 待审核
        TaxbackStep_CHECK = 1,
        // 审核通过
        TaxbackStep_PASS = 2,
        // 返回修改
        TaxbackStep_RETURN = 3,
        // 驳回
        TaxbackStep_REJECT = 4,
        // 已收票
        TaxbackStep_INVOICE = 5,
        // 申报中
        TaxbackStep_APPLY = 6,
        // 接收成功
        TaxbackStep_ACCEPT = 7,
        // 完成
        TaxbackStep_FINISH = 8,
      }
      // 账单进度
      export enum BillStep {
        // 草拟
        BillStep_DRAFT = 0,
        // 待审核
        BillStep_CHECK = 1,
        // 待财务复核
        BillStep_CONFIRM = 2,
        // 待结算
        BillStep_PAYMENT = 3,
        // 已结算
        BillStep_FINISH = 4,
      }
      // 协议进度
      export enum ContractStep {
        // 合同草稿生成中
        DRAFTING = 0,
        // 合同草稿
        DRAFTED = 1,
        // 电子签章生成中
        CREATING = 2,
        // 电子合同已生效
        CREATED = 3,
        // 线下盖章中
        SEALING = 4,
        // 合同已盖章
        SEALED = 5,
        // 合同已作废
        NULLIFY = 6,
        // 状态异常
        ABNORMAL = 7,
        // 已终止
        END = 8,
      }
      // 信息类型
      export enum InfoType {
        // 开关
        TOGGLE = 0,
        // 单选框
        RADIO = 1,
        // 复选框
        CHECKBOX = 2,
        // 文本框
        TEXT = 3,
        // 文件
        FILE = 4,
      }
      // 文件类型
      export enum FileType {
        // 图片
        PICTURE = 0,
        // 视频
        VIDEO = 1,
        // 文件
        DOCUMENT = 2,
      }
      // 准入录入方
      export enum PrimType {
        // 出口商
        PARTYA = 0,
        // 综服企业
        PARTYB = 1,
      }
      // 填写等级
      export enum Level {
        // 可选
        OPTIONAL = 0,
        // 必填
        MUST = 1,
        // PI必填
        PI = 2,
        // 报关必填
        DEC = 3,
        // 收汇必填
        SH = 4,
        // 退税必填
        TAXBACK = 5,
      }
      // 垫付类型
      export enum ChargeType {
        // 百分比
        PERCENTAGE = 0,
        // 分/美元
        CENTDOLLAR = 1,
      }
      // 贷款结账进度
      export enum PaymentStep {
        // 待提交
        PaymentStep_DRAFT = 0,
        // 部门初审（结汇专员）
        PaymentStep_CHECK = 1,
        // 财务复核
        PaymentStep_CONFIRM = 2,
        // 待收款
        PaymentStep_PAYMENT = 3,
        // 已到账
        PaymentStep_FINISH = 4,
      }
      // 服务内容
      export enum ServeType {
        // 报关服务
        DECLARE = 0,
        // 代理出口
        AGENT = 1,
        // 海运服务
        SHIPPING = 2,
        // 拖车服务
        TRUCK = 3,
      }
      export interface BigDecimal {
        bigDecimal?: string;
      }
    }
  }
}
