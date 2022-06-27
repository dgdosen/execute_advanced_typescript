// type OurArray<T> = Array<T>;
// const names: OurArray = ['Amir', 'Betty'];
// console.log(names);
// // type error: Generic type 'OurArray' requires 1 type argument(s)

// type OurArray<T = string> = Array<T>;
// const names: OurArray = ['Amir', 'Betty'];
// console.log(names);
//  ['Amir', 'Betty']

// type OurArray<T=string> = Array<T>;
// const numbers: OurArray<number> = [10, 20];
// console.log(numbers);
// // [10, 20]

// type OurArray<T = string> = Array<T>;
// const numbers: OurArray = [10, 20];
// console.log(numbers);
// // type error: Type 'number' is not assignable to type 'string'.

type Component<Props = {}> = (props: Props) => string;
type ButtonProps = { size: 'large' | 'small' };
const Button: Component<ButtonProps> = (props) => `a ${props.size} button`;
console.log(Button({ size: 'large' }));
// a large button

const PageTitle: Component = (props) => 'Execute Program';
console.log(PageTitle({}));
