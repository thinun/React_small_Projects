import React from 'react';

const Header = () => {
    console.log('header rendered')
    return (
        <div>
            <h2>Header</h2>

        </div>
    );
};

// here the Header component is mounted to useCallback Test4
export default React.memo(Header);
