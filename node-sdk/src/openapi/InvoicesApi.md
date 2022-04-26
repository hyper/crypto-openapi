# .InvoicesApi

All URIs are relative to _http://localhost:7070/v1_

| Method                                  | HTTP request                    | Description            |
| --------------------------------------- | ------------------------------- | ---------------------- |
| [**create**](InvoicesApi.md#create)     | **POST** /invoices              | Create Invoice         |
| [**list**](InvoicesApi.md#list)         | **GET** /invoices               | List Invoices          |
| [**retrieve**](InvoicesApi.md#retrieve) | **GET** /invoices/{invoiceId}   | Retrieve Invoice By Id |
| [**update**](InvoicesApi.md#update)     | **PATCH** /invoices/{invoiceId} | Update Invoice By Id   |

# **create**

> Invoice create()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateRequest = {
  // string (optional)
  prismAccount: "Prism-Account_example",
  // InlineObject2 (optional)
  inlineObject2: {
    account: "account_example",
    amount: 3.14,
    chain: "chain_example",
    currency: "currency_example",
    customer: "customer_example",
    due: null,
    number: "number_example",
    product: "product_example",
    transaction: "transaction_example",
    wallet: "wallet_example",
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name              | Type              | Description | Notes                            |
| ----------------- | ----------------- | ----------- | -------------------------------- |
| **inlineObject2** | **InlineObject2** |             |
| **prismAccount**  | [**string**]      |             | (optional) defaults to undefined |

### Return type

**Invoice**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**

> InlineResponse2002 list()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiListRequest = {
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string (optional)
  prismAccount: "Prism-Account_example",
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                                                 | Notes                            |
| ---------------- | ------------ | --------------------------------------------------------------------------- | -------------------------------- |
| **limit**        | [**number**] | A limit on the number of objects to be returned between 1 and 100.          | (optional) defaults to undefined |
| **page**         | [**number**] | Index of the page to be returned in a paginated response.                   | (optional) defaults to undefined |
| **sort**         | **any**      | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined |
| **expand**       | [**string**] | Specifies which fields to populate in the response.                         | (optional) defaults to undefined |
| **prismAccount** | [**string**] |                                                                             | (optional) defaults to undefined |

### Return type

**InlineResponse2002**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve**

> Invoice retrieve()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiRetrieveRequest = {
  // string
  invoiceId: "invoiceId_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string (optional)
  prismAccount: "Prism-Account_example",
};

apiInstance.retrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                         | Notes                            |
| ---------------- | ------------ | --------------------------------------------------- | -------------------------------- |
| **invoiceId**    | [**string**] |                                                     | defaults to undefined            |
| **expand**       | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined |
| **prismAccount** | [**string**] |                                                     | (optional) defaults to undefined |

### Return type

**Invoice**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **404**     | Not Found   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**

> Invoice update()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiUpdateRequest = {
  // string
  invoiceId: "invoiceId_example",
  // string (optional)
  prismAccount: "Prism-Account_example",
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name             | Type         | Description | Notes                            |
| ---------------- | ------------ | ----------- | -------------------------------- |
| **invoiceId**    | [**string**] |             | defaults to undefined            |
| **prismAccount** | [**string**] |             | (optional) defaults to undefined |

### Return type

**Invoice**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **400**     | Bad Request | -                |
| **404**     | Not Found   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
