import react, { createContext } from 'react'

export const ItemsContext = createContext();

export const ItemsContextProvider = (props) => {
     const [items, setItems] = react.useState([])
     return <ItemsContext.Provider value={{ items, setItems }}>{props.children}</ItemsContext.Provider>;
}