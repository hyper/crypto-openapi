# .PaymentIntentsApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](PaymentIntentsApi.md#cancel) | **DELETE** /payment_intents/{id} | Cancel Payment Intent
[**create**](PaymentIntentsApi.md#create) | **POST** /payment_intents | Create Payment Intent
[**list**](PaymentIntentsApi.md#list) | **GET** /payment_intents | List Payment Intents
[**poll**](PaymentIntentsApi.md#poll) | **GET** /payment_intents/{id}/poll | Poll Payment Intent
[**retrieve**](PaymentIntentsApi.md#retrieve) | **GET** /payment_intents/{id} | Retrieve Payment Intent
[**update**](PaymentIntentsApi.md#update) | **PATCH** /payment_intents/{id} | Update Payment Intent


# **cancel**
> PaymentIntent cancel()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiCancelRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance.cancel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**PaymentIntent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create**
> PaymentIntent create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiCreateRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // PaymentIntent (optional)
  payment_intent: null,
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_intent** | **PaymentIntent**|  |
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**PaymentIntent**

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
> ListPaymentIntentsResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiListRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // 'processing' | 'succeeded' | 'failed' | 'canceled' | The status of the payment intent to filter by. (optional)
  status: "processing",
  // string | The ID of the customer on the payment intent to filter by. (optional)
  customer: "customer_example",
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to be returned between 1 and 100. | (optional) defaults to undefined
 **page** | [**number**] | Index of the page to be returned in a paginated response. | (optional) defaults to undefined
 **sort** | **any** | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined
 **status** | [**&#39;processing&#39; | &#39;succeeded&#39; | &#39;failed&#39; | &#39;canceled&#39;**]**Array<&#39;processing&#39; &#124; &#39;succeeded&#39; &#124; &#39;failed&#39; &#124; &#39;canceled&#39;>** | The status of the payment intent to filter by. | (optional) defaults to undefined
 **customer** | [**string**] | The ID of the customer on the payment intent to filter by. | (optional) defaults to undefined


### Return type

**ListPaymentIntentsResponse**

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
> PaymentIntent poll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiPollRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
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
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


### Return type

**PaymentIntent**

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
> PaymentIntent retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiRetrieveRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
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
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


### Return type

**PaymentIntent**

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
> PaymentIntent update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentIntentsApi(configuration);

let body:.PaymentIntentsApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // UpdatePaymentIntentBody (optional)
  update_payment_intent_body: {
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
 **update_payment_intent_body** | **UpdatePaymentIntentBody**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**PaymentIntent**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


