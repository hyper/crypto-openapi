# .PayoutWalletsApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](PayoutWalletsApi.md#_delete) | **DELETE** /payout_wallets/{id} | Delete payout wallet
[**_delete_0**](PayoutWalletsApi.md#_delete_0) | **DELETE** /payout_wallets/{id} | Delete payout wallet
[**create**](PayoutWalletsApi.md#create) | **POST** /payout_wallets | Create payout wallet
[**create_0**](PayoutWalletsApi.md#create_0) | **POST** /payout_wallets | Create payout wallet
[**list**](PayoutWalletsApi.md#list) | **GET** /payout_wallets | List payout wallets
[**list_0**](PayoutWalletsApi.md#list_0) | **GET** /payout_wallets | List payout wallets
[**retrieve**](PayoutWalletsApi.md#retrieve) | **GET** /payout_wallets/{id} | Retrieve payout wallet
[**retrieve_0**](PayoutWalletsApi.md#retrieve_0) | **GET** /payout_wallets/{id} | Retrieve payout wallet
[**update**](PayoutWalletsApi.md#update) | **PATCH** /payout_wallets/{id} | Update payout wallet
[**update_0**](PayoutWalletsApi.md#update_0) | **PATCH** /payout_wallets/{id} | Update payout wallet


# **_delete**
> IPayoutWallet _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiDeleteRequest = {
  // string
  id: "id_example",
  // string (optional)
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
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **_delete_0**
> IPayoutWallet _delete_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiDelete0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance._delete_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create**
> IPayoutWallet create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiCreateRequest = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PayoutWalletCreateRequest (optional)
  payout_wallet_create_request: {
    type: "external",
    chain: "eth",
    address: "address_example",
    _default: true,
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_wallet_create_request** | **PayoutWalletCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create_0**
> IPayoutWallet create_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiCreate0Request = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PayoutWalletCreateRequest (optional)
  payout_wallet_create_request: {
    type: "external",
    chain: "eth",
    address: "address_example",
    _default: true,
  },
};

apiInstance.create_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_wallet_create_request** | **PayoutWalletCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**
> PayoutWalletListResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiListRequest = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // number (optional)
  limit: 3.14,
  // number (optional)
  page: 3.14,
  // number (optional)
  sort: 3.14,
  // string (optional)
  expand: "expand_example",
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pluto_account** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**number**] |  | (optional) defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**PayoutWalletListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list_0**
> PayoutWalletListResponse list_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiList0Request = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // number (optional)
  limit: 3.14,
  // number (optional)
  page: 3.14,
  // number (optional)
  sort: 3.14,
  // string (optional)
  expand: "expand_example",
};

apiInstance.list_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pluto_account** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**number**] |  | (optional) defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**PayoutWalletListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve**
> IPayoutWallet retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiRetrieveRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.retrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve_0**
> IPayoutWallet retrieve_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiRetrieve0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.retrieve_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined
 **expand** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> IPayoutWallet update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiUpdateRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PayoutWalletUpdateRequest (optional)
  payout_wallet_update_request: {
    chain: "eth",
    address: "address_example",
    _default: true,
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_wallet_update_request** | **PayoutWalletUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update_0**
> IPayoutWallet update_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutWalletsApi(configuration);

let body:.PayoutWalletsApiUpdate0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PayoutWalletUpdateRequest (optional)
  payout_wallet_update_request: {
    chain: "eth",
    address: "address_example",
    _default: true,
  },
};

apiInstance.update_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_wallet_update_request** | **PayoutWalletUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


