# .DefaultApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoicesInvoiceIdPoll**](DefaultApi.md#getInvoicesInvoiceIdPoll) | **GET** /invoices/{id}/poll | Your GET endpoint
[**getTransfers**](DefaultApi.md#getTransfers) | **GET** /transfers | Your GET endpoint
[**getTransfersTransferId**](DefaultApi.md#getTransfersTransferId) | **GET** /transfers/{id} | Your GET endpoint
[**postTransfersId**](DefaultApi.md#postTransfersId) | **POST** /transfers/{id} | 
[**wallets**](DefaultApi.md#wallets) | **GET** /payout_wallets | Your GET endpoint
[**walletsId**](DefaultApi.md#walletsId) | **DELETE** /payout_wallets/{id} | 
[**walletsId_0**](DefaultApi.md#walletsId_0) | **PATCH** /payout_wallets/{id} | 
[**walletsPayoutWalletId**](DefaultApi.md#walletsPayoutWalletId) | **GET** /payout_wallets/{id} | Your GET endpoint
[**wallets_0**](DefaultApi.md#wallets_0) | **POST** /payout_wallets | 


# **getInvoicesInvoiceIdPoll**
> void getInvoicesInvoiceIdPoll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetInvoicesInvoiceIdPollRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
};

apiInstance.getInvoicesInvoiceIdPoll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransfers**
> InlineResponse2006 getTransfers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTransfersRequest = {
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
};

apiInstance.getTransfers(body).then((data:any) => {
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
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**InlineResponse2006**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransfersTransferId**
> Transfer getTransfersTransferId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTransfersTransferIdRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
};

apiInstance.getTransfersTransferId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postTransfersId**
> void postTransfersId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostTransfersIdRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
  // InlineObject6 (optional)
  inlineObject6: {
    account: "account_example",
    amount: "amount_example",
    description: "description_example",
    invoice: "invoice_example",
    percent: 1,
    wallet: "wallet_example",
  },
};

apiInstance.postTransfersId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject6** | **InlineObject6**|  |
 **id** | [**string**] |  | defaults to undefined
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wallets**
> wallets()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiWalletsRequest = {
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // InlineObject3 (optional)
  inlineObject3: {
    data: [
      {
        account: null,
        address: "address_example",
        admin: true,
        chain: "eth",
        created: new Date('1970-01-01T00:00:00.00Z'),
        id: "id_example",
      },
    ],
    hasMore: true,
    page: 3.14,
    total: 3.14,
  },
};

apiInstance.wallets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | **InlineObject3**|  |
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to be returned between 1 and 100. | (optional) defaults to undefined
 **page** | [**number**] | Index of the page to be returned in a paginated response. | (optional) defaults to undefined
 **sort** | **any** | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **walletsId**
> void walletsId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiWalletsIdRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
};

apiInstance.walletsId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **walletsId_0**
> PayoutWallet walletsId_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiWalletsId0Request = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
};

apiInstance.walletsId_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**PayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **walletsPayoutWalletId**
> PayoutWallet walletsPayoutWalletId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiWalletsPayoutWalletIdRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
};

apiInstance.walletsPayoutWalletId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


### Return type

**PayoutWallet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wallets_0**
> PayoutWallet wallets_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiWallets0Request = {
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prismAccount: "Prism-Account_example",
  // InlineObject4 (optional)
  inlineObject4: {
    account: "account_example",
    address: "address_example",
    chain: "chain_example",
  },
};

apiInstance.wallets_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | **InlineObject4**|  |
 **prismAccount** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**PayoutWallet**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


