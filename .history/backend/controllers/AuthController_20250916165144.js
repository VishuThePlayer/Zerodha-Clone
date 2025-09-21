const { userModel } = require("../models/UserModel");


module.exports.Signup = async (req, res, next) => {
    try {
        console.log(req.body);
        await userModel(req.<div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="">
                Button
            </button>
            <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Button"
                aria-describedby=""
            />
        </div>
        
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Button"
                aria-describedby=""
            />
            <button class="btn btn-outline-secondary" type="button" id="">
                Button
            </button>
        </div>
        )
    } catch (error) {
        console.log(error);
    }
}