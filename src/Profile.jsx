import styles from "./Profile.module.css";

const Profile = (props) => {

  
	let userId = location.pathname.split("/")[2];
	let user = props.function(userId);
  
	return (
		<div className="row">
			<div className="col-sm-3">
				<img
					src={user.avatar}
					alt="" width={"100%"}
				/>
			</div>
			<div className="col-sm-9">
				<h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
				<h2 className={styles.about}>{user.about}</h2>
				<p>Email: {user.email}</p>
				<p>Id: {user.id}</p>
				<p className={styles.paragraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat natus beatae odio quos
					ab, corrupti soluta esse quo veritatis! Tempore quibusdam, eveniet corrupti velit
					doloremque inventore quia ipsa iure id?
				</p>
			</div>
		</div>
	);
};

export default Profile;