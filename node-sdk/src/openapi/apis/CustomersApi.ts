// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile } from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { canConsumeForm, isCodeInRange } from '../util';
import { SecurityAuthentication } from '../auth/auth';

import { Customer } from '../models/Customer';
import { InlineObject } from '../models/InlineObject';
import { InlineResponse200 } from '../models/InlineResponse200';

/**
 * no description
 */
export class CustomersApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Create Customer
   * @param prismAccount
   * @param inlineObject
   */
  public async create(
    prismAccount?: string,
    inlineObject?: InlineObject,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/customers';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(['application/json']);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(inlineObject, 'InlineObject', ''),
      contentType
    );
    requestContext.setBody(serializedBody);

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * List Customers
   * @param limit A limit on the number of objects to be returned between 1 and 100.
   * @param page Index of the page to be returned in a paginated response.
   * @param sort Specifies whether documents are sorted in an ascending or descending order.
   * @param expand Specifies which fields to populate in the response.
   * @param prismAccount
   */
  public async list(
    limit?: number,
    page?: number,
    sort?: any,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/customers';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer.serialize(limit, 'number', ''));
    }

    // Query Params
    if (page !== undefined) {
      requestContext.setQueryParam('page', ObjectSerializer.serialize(page, 'number', ''));
    }

    // Query Params
    if (sort !== undefined) {
      requestContext.setQueryParam('sort', ObjectSerializer.serialize(sort, 'any', ''));
    }

    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer.serialize(expand, 'string', ''));
    }

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Retrieve Customer By Id
   * @param customerId
   * @param expand Specifies which fields to populate in the response.
   * @param prismAccount
   */
  public async retrieve(
    customerId: string,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'customerId' is not null or undefined
    if (customerId === null || customerId === undefined) {
      throw new RequiredError('CustomersApi', 'retrieve', 'customerId');
    }

    // Path Params
    const localVarPath = '/customers/{customerId}'.replace(
      '{' + 'customerId' + '}',
      encodeURIComponent(String(customerId))
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer.serialize(expand, 'string', ''));
    }

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update Customer By Id
   * @param customerId
   * @param prismAccount
   */
  public async update(
    customerId: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'customerId' is not null or undefined
    if (customerId === null || customerId === undefined) {
      throw new RequiredError('CustomersApi', 'update', 'customerId');
    }

    // Path Params
    const localVarPath = '/customers/{customerId}'.replace(
      '{' + 'customerId' + '}',
      encodeURIComponent(String(customerId))
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class CustomersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to create
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async create(response: ResponseContext): Promise<Customer> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Customer = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Customer',
        ''
      ) as Customer;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Customer = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Customer',
        ''
      ) as Customer;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to list
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async list(response: ResponseContext): Promise<InlineResponse200> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse200 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse200',
        ''
      ) as InlineResponse200;
      return body;
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Not Found',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: InlineResponse200 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse200',
        ''
      ) as InlineResponse200;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to retrieve
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async retrieve(response: ResponseContext): Promise<Customer> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Customer = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Customer',
        ''
      ) as Customer;
      return body;
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Not Found',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Customer = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Customer',
        ''
      ) as Customer;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to update
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async update(response: ResponseContext): Promise<Customer> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Customer = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Customer',
        ''
      ) as Customer;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Bad Request',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Customer = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Customer',
        ''
      ) as Customer;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }
}
