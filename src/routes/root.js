import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from '../container/HOME/HomeContainer';
import BlogContainer from '../container/BLOG/BlogContainer';
import { CARD_DATA } from '../config/HomeConfig/CardConfig/config.card';
import useLocalStorage from '../hooks/useLocalStorage';
export const ThemeContext = React.createContext();
const Root = () => {
    const [theme, setTheme] = useLocalStorage();
    const themeclass = theme ? 'light' : 'dark';
    const handleThemeChange = () => {
        setTheme();
    };
    const DETAILS_PAGE_ROUTE = CARD_DATA.map((elem) => (
        <Route
            key={elem.id}
            path={elem.blogLink}
            element={<BlogContainer />}
        ></Route>
    ));
    return (
        <ThemeContext.Provider
            value={{ theme, handleThemeChange: handleThemeChange }}
        >
            <div className={themeclass}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        {DETAILS_PAGE_ROUTE}
                        <Route
                            path="*"
                            element={<div>Error 404 Page Not Found</div>}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeContext.Provider>
    );
};

export default Root;
