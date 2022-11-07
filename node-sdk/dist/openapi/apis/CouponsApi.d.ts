import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CouponCreateRequest } from '../models/CouponCreateRequest';
import { CouponListResponse } from '../models/CouponListResponse';
import { CouponUpdateRequest } from '../models/CouponUpdateRequest';
import { ICoupon } from '../models/ICoupon';
export declare class CouponsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CouponsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<ICoupon | void>;
    _delete_1(response: ResponseContext): Promise<ICoupon | void>;
    create(response: ResponseContext): Promise<ICoupon | void>;
    create_2(response: ResponseContext): Promise<ICoupon | void>;
    list(response: ResponseContext): Promise<void | CouponListResponse>;
    list_3(response: ResponseContext): Promise<void | CouponListResponse>;
    retrieve(response: ResponseContext): Promise<ICoupon | void>;
    retrieve_4(response: ResponseContext): Promise<ICoupon | void>;
    update(response: ResponseContext): Promise<ICoupon | void>;
    update_5(response: ResponseContext): Promise<ICoupon | void>;
}
