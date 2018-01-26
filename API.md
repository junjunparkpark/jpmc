**Basic Search API V1**
----
  This REST API will fetch branch and ATM locations through a 'basic' search, parsing a single string and, on success, returning an array of JSON objects indicating data for a branch/ATM.

* **URL**

  /api/v1/search

* **Method:**
  
  `GET` 
  
*  **URL Params**

   **Required:**
 
   `query=[string]`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 SUCCESS <br />
    **Content:** `results: [{ 
      id : [Integer]
      name: [String],
      automated_teller_machines: [Integer],
      branch: [Boolean],
      phone_number: [String],
      location: {
        address_line_1: [String],
        address_line_2: [String],
        city: [String],
        state: [String],
        zip_code: [Integer],
        distance_from: [Number],
      }
    }]`

 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Invalid ${key} Input" }`

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "URI was not found in the server" }`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Invalid ${key} Input" }`


* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

  `$.ajax({
  url: "/api/v1/search",
  type: "GET",
  data : { 
    query: "94112"
  },
  success : function(res) {
    console.log(res);
  },
  success : function(err) {
    console.log(err);
  }
});`


* **Notes:**

  * **Time & Author:** 01/26/2018 @ 5:17pm (UTC): (Jun Park <jun.park@live.com>) 
    **Content:** Initial drafting of Basic Search API documentation. Record URL, method, URL params, success and error responses, and sample call for GET request.