import React from 'react';
import styles from "./Button.module.css";

function Button({variant,type,disabled,children}) {
    console.log(variant);
    console.log(type);
    console.log(disabled);

  return (
    <button className={`${styles.btn}
     ${variant=== "primary" ? "bg-blue-700" :""}
    ${variant=== "warning" ? styles.warning :""}
    ${variant=== "success" ? styles.success :""}
    ${variant=== "error" ? styles.error :""}
      
     `
    }>{children}</button>
  )
}

export default Button