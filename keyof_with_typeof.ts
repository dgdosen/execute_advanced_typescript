// type IconName = 'rightArrow' | 'billing';

// const icons = {
//   rightArrow: 'fake right arrow image',
//   billing: 'fake billing image',
// };

// function Icon(props: { name: IconName }) {
//   return icons[props.name];
// }

// console.log(Icon({ name: 'rightArrow' }));
// // 'fake right arrow image'
// console.log(Icon({ name: 'billing' }));
// // 'fake billing image'
// console.log(Icon({ name: 'leftArrow' }));
// // type error: Type '"leftArrow"' is not assignable to type 'IconName'.

// type Icons = {
//   rightArrow: string;
//   billing: string;
// };
// const icons: Icons = {
//   rightArrow: 'fake right arrow image',
//   billing: 'fake billing image',
// };
// type IconName = keyof Icons;
// const iconName: IconName = 'rightArrow';
// console.log(iconName);
// // 'rightArrow'

// const iconName: IconName = 'leftArrow';
// console.log(iconName);
// // type error: Type '"leftArrow"' is not assignable to type 'keyof Icons'.

// const iconName: IconName = 'billing';
// console.log(iconName);
// // 'billing'

// const icons = {
//   rightArrow: 'fake right arrow image',
//   billing: 'fake billing image',
// };
// type IconName = keyof typeof icons;
// const iconName: IconName = 'rightArrow';
// console.log(iconName);
// // 'rightArrow'

const icons = {
  rightArrow: 'fake right arrow image',
  billing: 'fake billing image',
};
type IconName = keyof typeof icons;
function Icon(props: { name: IconName }) {
  return icons[props.name];
}
console.log(Icon({ name: 'rightArrow' }));
