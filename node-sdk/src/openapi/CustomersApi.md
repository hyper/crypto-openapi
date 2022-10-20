# .CustomersApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](CustomersApi.md#create) | **POST** /customers | Create customer
[**create_0**](CustomersApi.md#create_0) | **POST** /customers | Create customer
[**list**](CustomersApi.md#list) | **GET** /customers | List customers
[**list_0**](CustomersApi.md#list_0) | **GET** /customers | List customers
[**retrieve**](CustomersApi.md#retrieve) | **GET** /customers/{id} | Retrieve customer
[**retrieve_0**](CustomersApi.md#retrieve_0) | **GET** /customers/{id} | Retrieve customer
[**update**](CustomersApi.md#update) | **PATCH** /customers/{id} | Update customer
[**update_0**](CustomersApi.md#update_0) | **PATCH** /customers/{id} | Update customer


# **create**
> ICustomer create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiCreateRequest = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CustomerCreateRequest (optional)
  customer_create_request: {
    name: "name_example",
    email: "email_example",
    phone: "phone_example",
    billing_details: {
      address: {
        state: "state_example",
        postal_code: "postal_code_example",
        line2: "line2_example",
        line1: "line1_example",
        country: "country_example",
        city: "city_example",
      },
    },
    metadata: {
      "key": null,
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
 **customer_create_request** | **CustomerCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICustomer**

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
> ICustomer create_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiCreate0Request = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CustomerCreateRequest (optional)
  customer_create_request: {
    name: "name_example",
    email: "email_example",
    phone: "phone_example",
    billing_details: {
      address: {
        state: "state_example",
        postal_code: "postal_code_example",
        line2: "line2_example",
        line1: "line1_example",
        country: "country_example",
        city: "city_example",
      },
    },
    metadata: {
      "key": null,
    },
  },
};

apiInstance.create_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_create_request** | **CustomerCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICustomer**

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
> CustomerListResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiListRequest = {
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
  // string (optional)
  email: "email_example",
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
 **email** | [**string**] |  | (optional) defaults to undefined


### Return type

**CustomerListResponse**

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
> CustomerListResponse list_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiList0Request = {
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
  // string (optional)
  email: "email_example",
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
 **email** | [**string**] |  | (optional) defaults to undefined


### Return type

**CustomerListResponse**

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
> ICustomer retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiRetrieveRequest = {
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

**ICustomer**

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
> ICustomer retrieve_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiRetrieve0Request = {
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

**ICustomer**

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
> ICustomer update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiUpdateRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CustomerUpdateRequest (optional)
  customer_update_request: {
    name: "name_example",
    email: "email_example",
    phone: "phone_example",
    billing_details: {
      address: {
        state: "state_example",
        postal_code: "postal_code_example",
        line2: "line2_example",
        line1: "line1_example",
        country: "country_example",
        city: "city_example",
      },
    },
    metadata: {
      "key": null,
    },
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_update_request** | **CustomerUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICustomer**

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
> ICustomer update_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiUpdate0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // CustomerUpdateRequest (optional)
  customer_update_request: {
    name: "name_example",
    email: "email_example",
    phone: "phone_example",
    billing_details: {
      address: {
        state: "state_example",
        postal_code: "postal_code_example",
        line2: "line2_example",
        line1: "line1_example",
        country: "country_example",
        city: "city_example",
      },
    },
    metadata: {
      "key": null,
    },
  },
};

apiInstance.update_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_update_request** | **CustomerUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**ICustomer**

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


