import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div>
                <Link to="/singup">
                    <button>Sing Up</button>
				</Link>
				<Link to="/login">
                    <button>Login</button>
				</Link>
            </div>
		</div>
	);
};
