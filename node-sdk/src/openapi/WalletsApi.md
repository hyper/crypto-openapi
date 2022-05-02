# .WalletsApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](WalletsApi.md#_delete) | **DELETE** /wallets/{id} | Delete Wallet By Id
[**create**](WalletsApi.md#create) | **POST** /wallets | Create Wallet
[**list**](WalletsApi.md#list) | **GET** /wallets | List Wallets
[**retrieve**](WalletsApi.md#retrieve) | **GET** /wallets/{id} | Retrieve Wallet By Id
[**update**](WalletsApi.md#update) | **PATCH** /wallets/{id} | Update Wallet By Id


# **_delete**
> void _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiDeleteRequest = {
  // string
  id: "id_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
};

apiInstance._delete(body).then((data:any) => {
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

# **create**
> Wallet create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiCreateRequest = {
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // CreateWalletBody (optional)
  create_wallet_body: {
    account: "account_example",
    address: "address_example",
    chain: "chain_example",
    customer: "customer_example",
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_wallet_body** | **CreateWalletBody**|  |
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Wallet**

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
> ListWalletsResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiListRequest = {
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

**ListWalletsResponse**

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
> Wallet retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiRetrieveRequest = {
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

**Wallet**

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
> Wallet update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // UpdateWalletBody (optional)
  update_wallet_body: {
    chain: "chain_example",
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_wallet_body** | **UpdateWalletBody**|  |
 **id** | [**string**] |  | defaults to undefined
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Wallet**

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
**404** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


