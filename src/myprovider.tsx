// MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define el tipo de datos que almacenará tu contexto
interface MyContextType {
    value: string;
    setValue: (newValue: string) => void;
}

// Crea el contexto con un valor inicial
const MyContext = createContext<MyContextType | undefined>(undefined);

// Crea un proveedor de contexto
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<string>('valor inicial');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

// Crea un hook personalizado para usar el contexto
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext debe ser usado dentro de un MyProvider');
    }
    return context;
};
