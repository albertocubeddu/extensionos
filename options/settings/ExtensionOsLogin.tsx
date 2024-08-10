import { useState, useEffect } from "react";
import GoogleButton from "./GoogleButton"; // Changed to default import
import { ArrowBigLeftDash } from "lucide-react";

export const ExtensionOsLogin = () => {
    const [showLoginButton, setShowLoginButton] = useState(false);

    const handleToken = async (interactive = false) => {
        try {
            const token = await chrome.identity.getAuthToken({ interactive });
            if (token) {
                setShowLoginButton(false);
            } else {
                setShowLoginButton(true);
            }
        } catch (error) {
            console.error('Error getting token:', error);
            setShowLoginButton(true); // Show login button if error occurs, so that the user can login again.
        }
    };

    useEffect(() => {
        handleToken(); // Check token on component mount
    }, []);


    return (
        <>
            {showLoginButton ? (
                <div className="flex flex-row gap-0 mt-2">
                    <GoogleButton
                        onClick={() => handleToken(true)} />
                    <ArrowBigLeftDash size={40} strokeWidth={1} className=" mx-5 text-[#ff66cc] animate-[wiggle_1s_ease-in-out_infinite]" />
                </div>
            ) :
                <button>
                    Your Key is Set, and you're enjoying the FREE tier.
                </button>
            }
        </>
    );
};