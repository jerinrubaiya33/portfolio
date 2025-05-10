// "use client";
// import React from "react";
// import styled from "styled-components";

// const buttonColors = [
//   "#6a4c93", "#00d1ff", "#f44336", "#ff0068", "#ff9800", "#b2ff00", "#ffc100"
// ];

// const ProjectLayout = ({ name, description, date, demoLink, index }) => {
//   const color = buttonColors[index % buttonColors.length];

//   return (
//     <StyledAnchor
//       href={demoLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       data-label={name}
//       $color={color}
//     >
//       <div className="content">
//         <div className="left">
//           <h2>{name}</h2>
//           <p>{description}</p>
//         </div>
//         <div className="right">
//           <span>{new Date(date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//           })}</span>
//         </div>
//       </div>
//     </StyledAnchor>
//   );
// };

// const StyledAnchor = styled.a`
//   padding: 0.8em 2em;
//   text-transform: uppercase;
//   letter-spacing: 4px;
//   color: #fff;
//   border: 2px solid ${(props) => props.$color};
//   font-size: 10px;
//   position: relative;
//   font-family: 'Supermercado', sans-serif;
//   font-weight: 900;
//   background-color: #000;
//   cursor: pointer;
//   margin: 4px auto;
//   display: flex;
//   align-items: center;
//   transition: all 0.3s ease;
//   overflow: hidden;
//   width: 80%;
//   text-align: center;
//   text-decoration: none;
//   // backdrop-filter: blur(10px);
//   z-index: 10;

//   .content {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     z-index: 10;
//     position: relative;
//     color: #fff;

//     .left {
//       flex: 3;
//       text-align: left;
//       padding-left: 20px;
//     }

//     .right {
//       flex: 1;
//       text-align: right;
//       padding-right: 10px;
//     }

//     h2 {
//       font-size: 1.5rem;
//       margin-bottom: 5px;
//     }

//     p {
//       font-size: 0.9rem;
//       opacity: 0.8;
//       margin-bottom: 8px;
//     }

//     span {
//       font-size: 0.8rem;
//       font-weight: bold;
//       opacity: 0.7;
//     }
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background-color: ${(props) => props.$color};
//     transition: all 0.5s ease;
//     z-index: 0;
//   }

//   &:hover::before {
//     left: 0;
//   }

//   &:hover {
//     color: #000;
//     background-color: #fff;
//     border-color: #fff;
//     transform: scale(1.05);
//   }

//   @media (max-width: 640px) {
//     width: 95%;
//     padding: 0.2em 1em;
//     letter-spacing: 2.5px;

//     .content {
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 0.3rem;

//       .left {
//         padding-left: 10px;
//       }

//       .right {
//         padding-right: 10px;
//         text-align: left;
//         align-self: flex-end;
//       }

//       h2 {
//         font-size: 1.2rem;
//         margin-bottom: 2px;
//       }

//       p {
//         font-size: 0.75rem;
//         margin-bottom: 4px;
//       }

//       span {
//         font-size: 0.7rem;
//       }
//     }
//   }
// `;

// export default React.memo(ProjectLayout);












"use client";
import React, { useMemo } from "react";
import styles from './ProjectLayout.module.css';

const buttonColors = [
  "#6a4c93", "#00d1ff", "#f44336", "#ff0068", "#ff9800", "#b2ff00", "#ffc100"
];

const ProjectLayout = ({ name, description, date, demoLink, index }) => {
  const color = buttonColors[index % buttonColors.length];
  
  const formattedDate = useMemo(() => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [date]);

  return (
    <a
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      data-label={name}
      className={styles.projectItem}
      style={{ '--button-color': color }}
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.right}>
          <span>{formattedDate}</span>
        </div>
      </div>
    </a>
  );
};

export default React.memo(ProjectLayout);