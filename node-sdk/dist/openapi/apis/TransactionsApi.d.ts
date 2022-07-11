import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateTransactionBody } from '../models/CreateTransactionBody';
import { ListTransactionsResponse } from '../models/ListTransactionsResponse';
import { Transaction } from '../models/Transaction';
export declare class TransactionsApiRequestFactory extends BaseAPIRequestFactory {
  create(
    prism_account?: string,
    create_transaction_body?: CreateTransactionBody,
    _options?: Configuration
  ): Promise<RequestContext>;
  list(
    prism_account?: string,
    expand?: string,
    limit?: number,
    page?: number,
    sort?: any,
    _options?: Configuration
  ): Promise<RequestContext>;
  poll(
    id: string,
    prism_account?: string,
    expand?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  retrieve(
    id: string,
    prism_account?: string,
    expand?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
}
export declare class TransactionsApiResponseProcessor {
  create(response: ResponseContext): Promise<Transaction>;
  list(response: ResponseContext): Promise<ListTransactionsResponse>;
  poll(response: ResponseContext): Promise<Transaction>;
  retrieve(response: ResponseContext): Promise<Transaction>;
}
