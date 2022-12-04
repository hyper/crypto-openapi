# .PricesApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](PricesApi.md#_delete) | **DELETE** /prices/{id} | Delete price
[**_delete_0**](PricesApi.md#_delete_0) | **DELETE** /prices/{id} | Delete price
[**create**](PricesApi.md#create) | **POST** /prices | Create price
[**create_0**](PricesApi.md#create_0) | **POST** /prices | Create price
[**list**](PricesApi.md#list) | **GET** /prices | List prices
[**list_0**](PricesApi.md#list_0) | **GET** /prices | List prices
[**retrieve**](PricesApi.md#retrieve) | **GET** /prices/{id} | Retrieve price
[**retrieve_0**](PricesApi.md#retrieve_0) | **GET** /prices/{id} | Retrieve price
[**update**](PricesApi.md#update) | **PATCH** /prices/{id} | Update price
[**update_0**](PricesApi.md#update_0) | **PATCH** /prices/{id} | Update price


# **_delete**
> void | IPrice _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiDeleteRequest = {
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

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **_delete_0**
> void | IPrice _delete_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiDelete0Request = {
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

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create**
> void | IPrice create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiCreateRequest = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PriceCreateRequest (optional)
  price_create_request: {
    amount: 3.14,
    currency: "eth",
    chain: "eth",
    archived: true,
    metadata: {
      "key": null,
    },
    custom_amount: {
      _default: 3.14,
      maximum: 3.14,
      minimum: 3.14,
    },
    product: "product_example",
    base_price: {
      custom_amount: {
        _default: 3.14,
        maximum: 3.14,
        minimum: 3.14,
      },
      amount: 3.14,
      currency: "currency_example",
    },
    billing_period_days: 3.14,
    application_fee_percent: 3.14,
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_create_request** | **PriceCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create_0**
> void | IPrice create_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiCreate0Request = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PriceCreateRequest (optional)
  price_create_request: {
    amount: 3.14,
    currency: "eth",
    chain: "eth",
    archived: true,
    metadata: {
      "key": null,
    },
    custom_amount: {
      _default: 3.14,
      maximum: 3.14,
      minimum: 3.14,
    },
    product: "product_example",
    base_price: {
      custom_amount: {
        _default: 3.14,
        maximum: 3.14,
        minimum: 3.14,
      },
      amount: 3.14,
      currency: "currency_example",
    },
    billing_period_days: 3.14,
    application_fee_percent: 3.14,
  },
};

apiInstance.create_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_create_request** | **PriceCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**
> PriceListResponse | void list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiListRequest = {
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

**PriceListResponse | void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list_0**
> PriceListResponse | void list_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiList0Request = {
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

**PriceListResponse | void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve**
> void | IPrice retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiRetrieveRequest = {
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

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve_0**
> void | IPrice retrieve_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiRetrieve0Request = {
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

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> void | IPrice update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiUpdateRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PriceUpdateRequest (optional)
  price_update_request: {
    archived: true,
    metadata: {
      "key": null,
    },
    application_fee_percent: 3.14,
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_update_request** | **PriceUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update_0**
> void | IPrice update_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiUpdate0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PriceUpdateRequest (optional)
  price_update_request: {
    archived: true,
    metadata: {
      "key": null,
    },
    application_fee_percent: 3.14,
  },
};

apiInstance.update_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_update_request** | **PriceUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**void | IPrice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


