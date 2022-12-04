# .CouponsApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](CouponsApi.md#_delete) | **DELETE** /coupons/{id} | Delete coupon
[**_delete_0**](CouponsApi.md#_delete_0) | **DELETE** /coupons/{id} | Delete coupon
[**create**](CouponsApi.md#create) | **POST** /coupons | Create coupon
[**create_0**](CouponsApi.md#create_0) | **POST** /coupons | Create coupon
[**list**](CouponsApi.md#list) | **GET** /coupons | List coupons
[**list_0**](CouponsApi.md#list_0) | **GET** /coupons | List coupons
[**retrieve**](CouponsApi.md#retrieve) | **GET** /coupons/{id} | Retrieve coupon
[**retrieve_0**](CouponsApi.md#retrieve_0) | **GET** /coupons/{id} | Retrieve coupon
[**update**](CouponsApi.md#update) | **PATCH** /coupons/{id} | Update coupon
[**update_0**](CouponsApi.md#update_0) | **PATCH** /coupons/{id} | Update coupon


# **_delete**
> ICoupon | void _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiDeleteRequest = {
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

**ICoupon | void**

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
> ICoupon | void _delete_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiDelete0Request = {
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

**ICoupon | void**

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
> ICoupon | void create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiCreateRequest = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CouponCreateRequest (optional)
  coupon_create_request: {
    name: "name_example",
    code: "code_example",
    amount_off: 3.14,
    percent_off: 3.14,
    currency: "eth",
    chain: "eth",
    duration: "once",
    duration_in_days: 3.14,
    max_redemptions: 3.14,
    redeem_by: null,
    archived: true,
    products: [
      "products_example",
    ],
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_create_request** | **CouponCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICoupon | void**

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
> ICoupon | void create_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiCreate0Request = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CouponCreateRequest (optional)
  coupon_create_request: {
    name: "name_example",
    code: "code_example",
    amount_off: 3.14,
    percent_off: 3.14,
    currency: "eth",
    chain: "eth",
    duration: "once",
    duration_in_days: 3.14,
    max_redemptions: 3.14,
    redeem_by: null,
    archived: true,
    products: [
      "products_example",
    ],
  },
};

apiInstance.create_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_create_request** | **CouponCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICoupon | void**

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
> void | CouponListResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiListRequest = {
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

**void | CouponListResponse**

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
> void | CouponListResponse list_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiList0Request = {
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

**void | CouponListResponse**

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
> ICoupon | void retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiRetrieveRequest = {
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

**ICoupon | void**

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
> ICoupon | void retrieve_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiRetrieve0Request = {
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

**ICoupon | void**

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
> ICoupon | void update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiUpdateRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CouponUpdateRequest (optional)
  coupon_update_request: {
    name: "name_example",
    code: "code_example",
    amount_off: 3.14,
    percent_off: 3.14,
    currency: "eth",
    chain: "eth",
    duration: "once",
    duration_in_days: 3.14,
    max_redemptions: 3.14,
    redeem_by: null,
    archived: true,
    products: [
      "products_example",
    ],
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_update_request** | **CouponUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICoupon | void**

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
> ICoupon | void update_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CouponsApi(configuration);

let body:.CouponsApiUpdate0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CouponUpdateRequest (optional)
  coupon_update_request: {
    name: "name_example",
    code: "code_example",
    amount_off: 3.14,
    percent_off: 3.14,
    currency: "eth",
    chain: "eth",
    duration: "once",
    duration_in_days: 3.14,
    max_redemptions: 3.14,
    redeem_by: null,
    archived: true,
    products: [
      "products_example",
    ],
  },
};

apiInstance.update_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_update_request** | **CouponUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICoupon | void**

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


