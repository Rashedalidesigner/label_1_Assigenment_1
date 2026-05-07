Why any is a Type Safety Hole and Why unknown is Safer (with Type Narrowing)
🟢 Introduction

TypeScript is designed to provide static type safety, helping developers catch errors at compile time instead of runtime. However, the any type completely bypasses this system, making it dangerous in large-scale applications. On the other hand, unknown enforces safe handling of dynamic data using type narrowing.

🔴 Why any is a Type Safety Hole

The any type disables TypeScript’s type checking. Once a variable is any, you can perform any operation on it—even invalid ones.

❌ Example (Unsafe Code)
let data: any = "Hello World";

data = 42;

// No error, but this is dangerous
data.toUpperCase();

👉 Here, data is a number, but we are still calling a string method. TypeScript does NOT stop this.

✔ This is why any is called a type safety hole.

🟡 Why unknown is Safer

unknown also accepts any value, but forces you to check the type before using it.

✅ Example (Safe Code)
let data: unknown = "Hello World";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

👉 Now TypeScript ensures safety before execution.

🧠 What is Type Narrowing?

Type narrowing is the process of refining a broad type into a specific one using conditions.

Example:
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}

✔ TypeScript narrows the type based on the condition.
