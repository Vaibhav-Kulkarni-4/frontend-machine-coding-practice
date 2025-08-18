import { createContext } from "react";

export interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// This is Step 1: Create a context using createContext
export const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment() {
    this.count += 1;
    console.log("Incremented count:", this.count);
    return this.count;
  },
  decrement() {
    this.count -= 1;
    console.log("Decremented count:", this.count);
    return this.count;
  },
});

// export const CounterProvider = CounterContext.Provider;
