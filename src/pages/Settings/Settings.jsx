import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Settings = () => {
  const { userProfile } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.profile.value;
    userProfile(name, photoUrl);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-corporate-lightColor">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center flex-shrink-0 lg:text-left">
            <h1 className="text-5xl font-bold">Update Profile</h1>
            <p className="py-6">Update Your Profile Image & Name</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProfile} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile URL</span>
                </label>
                <input
                  name="profile"
                  type="text"
                  placeholder="Profile URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
