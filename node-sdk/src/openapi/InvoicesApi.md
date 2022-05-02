# .InvoicesApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](InvoicesApi.md#create) | **POST** /invoices | Create Invoice
[**list**](InvoicesApi.md#list) | **GET** /invoices | List Invoices
[**poll**](InvoicesApi.md#poll) | **GET** /invoices/{id}/poll | Poll Invoice By ID
[**retrieve**](InvoicesApi.md#retrieve) | **GET** /invoices/{id} | Retrieve Invoice By Id
[**update**](InvoicesApi.md#update) | **PATCH** /invoices/{id} | Update Invoice By Id


# **create**
> Invoice create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateRequest = {
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // CreateInvoiceBody (optional)
  create_invoice_body: {
    account: "account_example",
    amount: 3.14,
    chain: "chain_example",
    currency: "currency_example",
    customer: "customer_example",
    due: "due_example",
    number: "number_example",
    product: "product_example",
    transaction: "transaction_example",
    wallet: "wallet_example",
    fee_data: {
      percent: 3.14,
      description: "description_example",
      amount: 3.14,
    },
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_invoice_body** | **CreateInvoiceBody**|  |
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Invoice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**
> ListInvoicesResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiListRequest = {
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | A limit on the number of objects to be returned between 1 and 100. | (optional) defaults to undefined
 **page** | [**number**] | Index of the page to be returned in a paginated response. | (optional) defaults to undefined
 **sort** | **any** | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**ListInvoicesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **poll**
> void poll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiPollRequest = {
  // string
  id: "id_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
};

apiInstance.poll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve**
> Invoice retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiRetrieveRequest = {
  // string
  id: "id_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
};

apiInstance.retrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Invoice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> Invoice update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // UpdateInvoiceBody (optional)
  update_invoice_body: {
    amount: 1,
    chain: "chain_example",
    currency: "currency_example",
    due: "due_example",
    transaction: "transaction_example",
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_invoice_body** | **UpdateInvoiceBody**|  |
 **id** | [**string**] |  | defaults to undefined
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Invoice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


