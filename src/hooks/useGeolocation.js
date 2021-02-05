import { useState, useEffect } from "react";

// see http://geolocation-db.com/

const useGeolocation = () => {

    const [address, setAddress] = useState('')

    useEffect(() => {
      const URL = 'https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91';
      fetch(URL)
        .then(res => res.json())
        .then(data => setAddress(data));
    }, []);

    return address;
    
}

export default useGeolocation

