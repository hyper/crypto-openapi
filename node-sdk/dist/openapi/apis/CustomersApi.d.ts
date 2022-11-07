import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerListResponse } from '../models/CustomerListResponse';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { ICustomer } from '../models/ICustomer';
export declare class CustomersApiRequestFactory extends BaseAPIRequestFactory {
    create(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_1(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Promise<RequestContext>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_4(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomersApiResponseProcessor {
    create(response: ResponseContext): Promise<void | ICustomer>;
    create_1(response: ResponseContext): Promise<void | ICustomer>;
    list(response: ResponseContext): Promise<void | CustomerListResponse>;
    list_2(response: ResponseContext): Promise<void | CustomerListResponse>;
    retrieve(response: ResponseContext): Promise<void | ICustomer>;
    retrieve_3(response: ResponseContext): Promise<void | ICustomer>;
    update(response: ResponseContext): Promise<void | ICustomer>;
    update_4(response: ResponseContext): Promise<void | ICustomer>;
}
