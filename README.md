# Note
1. to run react app : npm run dev
2. keep the first letter of the componenet always capital

## Hooks
1. Hooks are function.
2. Hooks allows to use state and other features without writting a class. 

>Rules to use Hooks
1. Only call hooks at top level:
2. Only call hooks from react functions: 

## UseEffect Hook
1. After the page render for the first time the useffect hook work atleast once.
```javascript
    useEffect(()=>{
        //mounting

        return () =>{
            //unmounting
        }
    }
```
#context API
1. Create a context
```
const userContext = createContext()
```
2. Provider
```
<userContext.Provider value={value}>
    {children}
</userContext.Provider>
```

3. Consumer

useContext() Hook
```
useContext(userContext)
```

4. Display the data
```
<Provider>
    <Consumer>
</Provider>
```




