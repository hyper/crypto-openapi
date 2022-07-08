# .FeesApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](FeesApi.md#_delete) | **DELETE** /fees/{id} | Delete Fee By Id
[**create**](FeesApi.md#create) | **POST** /fees | Create Fee
[**list**](FeesApi.md#list) | **GET** /fees | List Fees
[**retrieve**](FeesApi.md#retrieve) | **GET** /fees/{id} | Retrieve Fee By Id


# **_delete**
> void _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeesApi(configuration);

let body:.FeesApiDeleteRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance._delete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


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

# **create**
> Fee create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeesApi(configuration);

let body:.FeesApiCreateRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // CreateFeeBody (optional)
  create_fee_body: {
    description: "description_example",
    invoice: "invoice_example",
    percent: 3.14,
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
 **create_fee_body** | **CreateFeeBody**|  |
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Fee**

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
> ListFeesResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeesApi(configuration);

let body:.FeesApiListRequest = {
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
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
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**ListFeesResponse**

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
> Fee retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FeesApi(configuration);

let body:.FeesApiRetrieveRequest = {
  // string
  id: "id_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
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
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Fee**

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


