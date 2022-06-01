# .TransfersApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](TransfersApi.md#create) | **POST** /transfers | Create Transfer
[**list**](TransfersApi.md#list) | **GET** /transfers | List Transfers
[**retrieve**](TransfersApi.md#retrieve) | **GET** /transfers/{id} | Retrieve Transfer By ID


# **create**
> Transfer create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransfersApi(configuration);

let body:.TransfersApiCreateRequest = {
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // CreateTransferBody (optional)
  create_transfer_body: {
    account: "account_example",
    description: "description_example",
    invoice: "invoice_example",
    percent: 1,
    wallet: "wallet_example",
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_transfer_body** | **CreateTransferBody**|  |
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Transfer**

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
> ListTransfersResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransfersApi(configuration);

let body:.TransfersApiListRequest = {
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

**ListTransfersResponse**

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

# **retrieve**
> Transfer retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransfersApi(configuration);

let body:.TransfersApiRetrieveRequest = {
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

**Transfer**

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


