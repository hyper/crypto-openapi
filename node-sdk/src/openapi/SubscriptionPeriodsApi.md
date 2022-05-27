# .SubscriptionPeriodsApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](SubscriptionPeriodsApi.md#list) | **GET** /subscription_periods | List Subscription Periods
[**retrieve**](SubscriptionPeriodsApi.md#retrieve) | **GET** /subscription_periods/{id} | List Subscription Periods
[**update**](SubscriptionPeriodsApi.md#update) | **PATCH** /subscription_periods/{id} | Update Subscription Period


# **list**
> ListSubscriptionPeriodsResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPeriodsApi(configuration);

let body:.SubscriptionPeriodsApiListRequest = {
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to be returned between 1 and 100. | (optional) defaults to undefined
 **page** | [**number**] | Index of the page to be returned in a paginated response. | (optional) defaults to undefined
 **sort** | **any** | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined


### Return type

**ListSubscriptionPeriodsResponse**

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

# **retrieve**
> SubscriptionPeriod retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPeriodsApi(configuration);

let body:.SubscriptionPeriodsApiRetrieveRequest = {
  // string
  id: "id_example",
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
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**SubscriptionPeriod**

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
> SubscriptionPeriod update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPeriodsApi(configuration);

let body:.SubscriptionPeriodsApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Prism account you are making a request on behalf on. (optional)
  prism_account: "Prism-Account_example",
  // UpdateSubscriptionPeriodBody (optional)
  update_subscription_period_body: {
    end: 3.14,
    start: 3.14,
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_subscription_period_body** | **UpdateSubscriptionPeriodBody**|  |
 **id** | [**string**] |  | defaults to undefined
 **prism_account** | [**string**] | The ID of the connected Prism account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**SubscriptionPeriod**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


