// const frist_array: string[] = ["rashed", "shohag", "ali", "khan"];
// const second_array: number[] = [12, 43, 64, 534];
// const third_array: { id: number, name: string }[] = [{ id: 1, name: "rashed" }, { id: 2, name: "shohag" }, { id: 3, name: "jibon" }, { id: 4, name: "alamin" }];
// const fouur_array: boolean[] = [true, false, false, true];

// console.log(frist_array);
// console.log(second_array);
// console.log(third_array);
// console.log(fouur_array);


// const add = (n1: number, n2: number) => {
//     return n1 + n2
// }
// const addString = (n1: string, n2: string) => {

//     return n1 + n2
// }

// console.log(add(12, 8));
// console.log(addString("12", "23"));

const add = <x, y>(n1: x, n2: y) => {
    console.log(n1, n2)
}

add(12, 45);