import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateCustomerBody } from '../models/CreateCustomerBody';
import { Customer } from '../models/Customer';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { UpdateCustomerBody } from '../models/UpdateCustomerBody';
export declare class CustomersApiRequestFactory extends BaseAPIRequestFactory {
    create(pluto_account?: string, create_customer_body?: CreateCustomerBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, email?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, update_customer_body?: UpdateCustomerBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomersApiResponseProcessor {
    create(response: ResponseContext): Promise<Customer>;
    list(response: ResponseContext): Promise<ListCustomersResponse>;
    retrieve(response: ResponseContext): Promise<Customer>;
    update(response: ResponseContext): Promise<Customer>;
}
