# .PaymentIntentsApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](PaymentIntentsApi.md#_delete) | **DELETE** /payment_intents/{id} | Delete payment intent
[**_delete_0**](PaymentIntentsApi.md#_delete_0) | **DELETE** /payment_intents/{id} | Delete payment intent
[**create**](PaymentIntentsApi.md#create) | **POST** /payment_intents | Create payment intent
[**create_0**](PaymentIntentsApi.md#create_0) | **POST** /payment_intents | Create payment intent
[**list**](PaymentIntentsApi.md#list) | **GET** /payment_intents | List payment intents
[**list_0**](PaymentIntentsApi.md#list_0) | **GET** /payment_intents | List payment intents
[**poll**](PaymentIntentsApi.md#poll) | **GET** /payment_intents/{id}/poll | Poll payment intent
[**poll_0**](PaymentIntentsApi.md#poll_0) | **GET** /payment_intents/{id}/poll | Poll payment intent
[**retrieve**](PaymentIntentsApi.md#retrieve) | **GET** /payment_intents/{id} | Retrieve payment intent
[**retrieve_0**](PaymentIntentsApi.md#retrieve_0) | **GET** /payment_intents/{id} | Retrieve payment intent
[**sendReceipt**](PaymentIntentsApi.md#sendReceipt) | **POST** /payment_intents/{id}/send_receipt | Send payment intent receipt
[**sendReceipt_0**](PaymentIntentsApi.md#sendReceipt_0) | **POST** /payment_intents/{id}/send_receipt | Send payment intent receipt
[**update**](PaymentIntentsApi.md#update) | **PATCH** /payment_intents/{id} | Update payment intent
[**update_0**](PaymentIntentsApi.md#update_0) | **PATCH** /payment_intents/{id} | Update payment intent


# **_delete**
> IPaymentIntent _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiDeleteRequest = {
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

**IPaymentIntent**

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
> IPaymentIntent _delete_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiDelete0Request = {
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

**IPaymentIntent**

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
> IPaymentIntent create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiCreateRequest = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PaymentIntentCreateRequest (optional)
  payment_intent_create_request: {
    amount: 3.14,
    metadata: {
      "key": null,
    },
    price: "price_example",
    customer: "customer_example",
    line_items: [
      {
        description: "description_example",
        price_data: {
          id: "id_example",
          object: "object_example",
          created: 3.14,
          test: true,
          account: "account_example",
          platform_account: "platform_account_example",
          amount: 3.14,
          custom_amount: {
            _default: 3.14,
            maximum: 3.14,
            minimum: 3.14,
          },
          currency: "eth",
          chain: "eth",
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
          archived: true,
          metadata: {
            "key": null,
          },
        },
        quantity: 3.14,
        price: "price_example",
      },
    ],
    invoice: "invoice_example",
    subscription: "subscription_example",
    chain: "eth",
    application_fee_percent: 3.14,
    currency: "eth",
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_intent_create_request** | **PaymentIntentCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPaymentIntent**

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
> IPaymentIntent create_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiCreate0Request = {
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PaymentIntentCreateRequest (optional)
  payment_intent_create_request: {
    amount: 3.14,
    metadata: {
      "key": null,
    },
    price: "price_example",
    customer: "customer_example",
    line_items: [
      {
        description: "description_example",
        price_data: {
          id: "id_example",
          object: "object_example",
          created: 3.14,
          test: true,
          account: "account_example",
          platform_account: "platform_account_example",
          amount: 3.14,
          custom_amount: {
            _default: 3.14,
            maximum: 3.14,
            minimum: 3.14,
          },
          currency: "eth",
          chain: "eth",
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
          archived: true,
          metadata: {
            "key": null,
          },
        },
        quantity: 3.14,
        price: "price_example",
      },
    ],
    invoice: "invoice_example",
    subscription: "subscription_example",
    chain: "eth",
    application_fee_percent: 3.14,
    currency: "eth",
  },
};

apiInstance.create_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_intent_create_request** | **PaymentIntentCreateRequest**|  |
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPaymentIntent**

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
> PaymentIntentListResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiListRequest = {
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
  status: "status_example",
  // string (optional)
  customer: "customer_example",
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
 **status** | [**string**] |  | (optional) defaults to undefined
 **customer** | [**string**] |  | (optional) defaults to undefined


### Return type

**PaymentIntentListResponse**

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
> PaymentIntentListResponse list_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiList0Request = {
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
  status: "status_example",
  // string (optional)
  customer: "customer_example",
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
 **status** | [**string**] |  | (optional) defaults to undefined
 **customer** | [**string**] |  | (optional) defaults to undefined


### Return type

**PaymentIntentListResponse**

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

# **poll**
> IPaymentIntent poll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiPollRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.poll(body).then((data:any) => {
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

**IPaymentIntent**

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

# **poll_0**
> IPaymentIntent poll_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiPoll0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // string (optional)
  expand: "expand_example",
};

apiInstance.poll_0(body).then((data:any) => {
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

**IPaymentIntent**

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

# **retrieve**
> IPaymentIntent retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiRetrieveRequest = {
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

**IPaymentIntent**

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
> IPaymentIntent retrieve_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiRetrieve0Request = {
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

**IPaymentIntent**

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

# **sendReceipt**
> IPaymentIntent sendReceipt()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiSendReceiptRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance.sendReceipt(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPaymentIntent**

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

# **sendReceipt_0**
> IPaymentIntent sendReceipt_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiSendReceipt0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance.sendReceipt_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPaymentIntent**

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
> IPaymentIntent update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiUpdateRequest = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PaymentIntentUpdateRequest (optional)
  payment_intent_update_request: {
    metadata: {
      "key": null,
    },
    hash: "hash_example",
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_intent_update_request** | **PaymentIntentUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPaymentIntent**

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
> IPaymentIntent update_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiUpdate0Request = {
  // string
  id: "id_example",
  // string (optional)
  pluto_account: "Pluto-Account_example",
  // PaymentIntentUpdateRequest (optional)
  payment_intent_update_request: {
    metadata: {
      "key": null,
    },
    hash: "hash_example",
  },
};

apiInstance.update_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_intent_update_request** | **PaymentIntentUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] |  | (optional) defaults to undefined


### Return type

**IPaymentIntent**

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


