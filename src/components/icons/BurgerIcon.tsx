import React from 'react';

function BurgerIcon(props: { className?: string; element?: string }) {
  return (
    <svg
      className={props.className}
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.6667 16.875C22.6667 17.9156 21.7322 18.75 20.5667 18.75H3.76666C3.2097 18.75 2.67556 18.5525 2.28173 18.2008C1.88791 17.8492 1.66666 17.3723 1.66666 16.875C1.66666 16.3777 1.88791 15.9008 2.28173 15.5492C2.67556 15.1975 3.2097 15 3.76666 15H13.2167L13.8729 15.4688C15.0396 16.3021 16.6437 16.3021 17.8104 15.4688L18.4667 15H20.5667C21.1236 15 21.6578 15.1975 22.0516 15.5492C22.4454 15.9008 22.6667 16.3777 22.6667 16.875Z'
        fill={props.element == 'filling' ? '#ADA69D' : '#F0F0F0'}
      />
      <rect
        x='12.1667'
        width='0.75'
        height='6'
        rx='0.375'
        fill={props.element == 'flag' ? '#ADA69D' : '#F0F0F0'}
      />
      <path
        d='M18.1667 2.625L12.1667 4.5L12.1667 0.75L18.1667 2.625Z'
        fill={props.element == 'flag' ? '#ADA69D' : '#F0F0F0'}
      />
      <path
        d='M22.4463 19.7203C22.587 19.8609 22.6667 20.0531 22.6667 20.25V21C22.6667 22.6326 21.2993 23.25 19.6667 23.25H4.66666C3.03513 23.25 1.66666 22.6349 1.66666 21V20.25C1.66666 20.0531 1.74588 19.8609 1.8865 19.7203C2.02713 19.5797 2.21791 19.5 2.41666 19.5H21.9167C22.1135 19.5 22.3057 19.5797 22.4463 19.7203Z'
        fill={props.element == 'bread' ? '#ADA69D' : '#F0F0F0'}
      />
      <path
        d='M2.52869 14.1C2.31963 13.9969 2.13682 13.8516 1.99338 13.6688C1.84994 13.4859 1.75057 13.275 1.70182 13.05C1.65307 12.8203 1.65729 12.5859 1.71307 12.3609C2.74385 8.29781 7.03385 5.25 12.1667 5.25C17.2995 5.25 21.5885 8.29781 22.6198 12.3609C22.676 12.5859 22.6807 12.8203 22.6292 13.05C22.5823 13.275 22.4839 13.4859 22.3385 13.6688C22.1557 13.8516 22.0151 13.9969 21.8042 14.1C21.5979 14.1984 21.3682 14.25 21.1339 14.25H3.19807C2.96651 14.25 2.73729 14.1984 2.52869 14.1ZM17.637 9.22031C17.4964 9.36094 17.4167 9.55312 17.4167 9.75C17.4167 9.9 17.4588 10.0453 17.5432 10.1672C17.6276 10.2891 17.7026 10.3875 17.8807 10.4438C18.0167 10.4578 18.1667 10.5141 18.312 10.4859C18.4573 10.4578 18.5932 10.3875 18.6964 10.2797C18.8042 10.1766 18.8745 10.0406 18.9026 9.89531C18.9307 9.75 18.8745 9.6 18.8604 9.46406C18.8042 9.28594 18.7057 9.21094 18.5838 9.12656C18.462 9.04219 18.3167 8.95781 18.1667 8.95781C17.9698 8.95781 17.7776 9.07969 17.637 9.22031ZM11.637 7.71984C11.4963 7.86047 11.4167 8.05125 11.4167 8.25C11.4167 8.39812 11.4588 8.54531 11.5432 8.66719C11.6276 8.78906 11.7026 8.8875 11.8807 8.94375C12.0167 8.95781 12.1667 9.01406 12.312 8.98594C12.4573 8.95781 12.5932 8.8875 12.6963 8.77969C12.8042 8.67656 12.8745 8.54063 12.9026 8.39625C12.9307 8.25094 12.8745 8.1 12.8604 7.96312C12.8042 7.82578 12.7057 7.70859 12.5838 7.62656C12.462 7.54406 12.3167 7.45781 12.1667 7.45781C11.9698 7.45781 11.7776 7.57922 11.637 7.71984ZM5.63697 9.22031C5.49635 9.36094 5.41666 9.55312 5.41666 9.75C5.41666 9.9 5.45885 10.0453 5.54322 10.1672C5.6276 10.2891 5.7026 10.3875 5.88072 10.4438C6.01666 10.4578 6.16666 10.5141 6.31198 10.4859C6.45729 10.4578 6.59323 10.3875 6.69635 10.2797C6.80416 10.1766 6.87447 10.0406 6.9026 9.89531C6.93072 9.75 6.87448 9.6 6.86041 9.46406C6.80416 9.28594 6.70572 9.21094 6.58385 9.12656C6.46197 9.04219 6.31666 8.95781 6.16666 8.95781C5.96979 8.95781 5.7776 9.07969 5.63697 9.22031Z'
        fill={props.element == 'bread' ? '#ADA69D' : '#F0F0F0'}
      />
    </svg>
  );
}

export default BurgerIcon;
