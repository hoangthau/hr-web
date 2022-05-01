# React HR Web

### Getting Started

Install Node v12.x or higher and install npm
Check version

```
> node -v
> npm -v
```

### Start Development

```
> npm ci
> npm start
```

### Components

We will design and implement all common UI components for our app. So we will have a design system for our product.

- `Button`: We will use Button component for all buttons in our app to have consistent style. For example: Close, Save, Update button.
- `Modal`: Open Modal to update an employee
- `Switch`: Show and change status of employee
- `Table`: Display all employees with columns and rows
- `TextInput`: Display and change employee infomation like name, email as text input
- Other components: We will use `Form` component to change employee info inside Modal. `Employees` component as page to handle all things related to employees: list of employees, update an employee

Beside that I decided to implement some extra things as follows:

- Redux: to store employees data, to get, fetch and update employee via store. Using Redux to avoid prop drilling and easy to trace data changes via dispatch actions.
- Simple form validation when user updates an employee inside Modal.
- Responsive layout for mobile devices
- Using async action and simulate API call to fetch employees data
- Using React.memo to improve rendering performance for each employment row
- Some unit tests for UI components
