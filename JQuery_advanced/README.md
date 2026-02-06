# jQuery Advanced

Advanced jQuery exercises.

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files must end with a new line
- A README.md at the root of the project folder is mandatory

## Tasks
### 0. Setup your dev environment
Create [0-index.html](0-index.html) using the provided starter HTML and:
- Load the latest slim/minified jQuery from code.jquery.com
- Verify jQuery is loaded on page load
- Log `jQuery has been loaded correctly` or `jQuery has not been loaded correctly`
- Use a script tag with `type="application/javascript"`

**File:**
- [0-index.html](0-index.html)

### 1. Creating a DOM element
Create [1-index.html](1-index.html) and:
- Define `createTextElement()` to create a `<p>` with the provided text
- Append it to the body using jQuery `append`
- Call `createTextElement()`

**File:**
- [1-index.html](1-index.html)

### 2. Creating multiple DOM elements at once
Create [2-index.html](2-index.html) and:
- Define `createFamilyTree()` to build a table with one string
- Use jQuery to create the table and append it to the body once
- Call `createFamilyTree()`

**File:**
- [2-index.html](2-index.html)

### 3. Chain DOM elements
Create [3-index.html](3-index.html) and:
- Reuse `createFamilyTree()` with the same table values
- Create each element one by one using chained `append`
- Use `text` for each cell, without intermediate variables
- Call `createFamilyTree()`

**File:**
- [3-index.html](3-index.html)

### 4. HTML function
Create [4-index.html](4-index.html) and:
- Reuse `createFamilyTree()` to build the table
- Add `replaceFamilyTree()` to replace the `<tbody>` content using `html`
- Call both functions

**File:**
- [4-index.html](4-index.html)

### 5. Click attribute and remove function
Create [5-index.html](5-index.html) and:
- Build an empty table with `<thead>` and an empty `<tbody>`
- Add `addNewMember(firstName, lastName)` to append rows with a removable `(x)` cell
- Use `click`, `css`, and `remove`
- Populate the table with the provided five members

**File:**
- [5-index.html](5-index.html)

### 6. Val, before, and prepend functions
Create [6-index.html](6-index.html) and:
- Reuse `createFamilyTree()` and `addNewMember()` with a `position` argument
- Use `prepend` to add before and append to add after
- Build a form (two text inputs, select, submit) and insert it before the table
- On submit, call `addNewMember()` with input values and selected position

**File:**
- [6-index.html](6-index.html)

### 7. Query - Setup your dev environment
Create [7-index.html](7-index.html) and:
- Load jQuery minified (not slim) to use ajax
- Build a search form (text input, submit, empty ul)
- Implement `addNewArticle(id, title, snippet)` to append results
- Implement `queryWikipedia(search)` using the MediaWiki search API
- Call `createSearchForm()` on page load

**File:**
- [7-index.html](7-index.html)

### 8. Pagination
Create [8-index.html](8-index.html) and:
- Add a pagination `<ul id="pagination">`
- Extend `queryWikipedia(search, offset)` to pass `sroffset` and call `buildPagination`
- Implement `buildPagination(numberOfItems, itemsPerPage, currentOffset)`
- Display pages horizontally with clickable items

**File:**
- [8-index.html](8-index.html)

### 9. Wrap/unwrap
Create [9-index.html](9-index.html) and:
- Add a `.loading` class with `opacity: 0.2`
- Implement `displayLoading(loading)` using jQuery `wrap` and `unwrap`
- Call `displayLoading(true)` before the API request and `displayLoading(false)` after results render

**File:**
- [9-index.html](9-index.html)

### 10. Another Get API
Create [10-index.html](10-index.html) and:
- Use jQuery `get` to fetch posts from the local json-server
- Implement `addPostRow(data)` to append a paragraph per post
- Alert `Server Error` if the request fails
Add [db.json](db.json) for json-server data.

**Files:**
- [10-index.html](10-index.html)
- [db.json](db.json)

### 11. Post query
Create [11-index.html](11-index.html) and:
- Build a form with labeled inputs for author and title
- Use `after` to show a message before sending the POST
- Send data with jQuery `post` and append the result with `addPostRow`
- Call `listPosts()` and `buildForm()` on page load

**Files:**
- [11-index.html](11-index.html)
- [db.json](db.json)

### 12. Delete query
Create [12-index.html](12-index.html) and:
- Update `addPostRow()` to prepend a clickable `(delete)` span and add `row-<id>` to the paragraph
- Implement `deletePost(id)` using a DELETE request and remove the row on success
- Alert `Post was not deleted` on failure

**Files:**
- [12-index.html](12-index.html)
- [db.json](db.json)
