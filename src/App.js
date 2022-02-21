import { useState } from 'react';
import './App.css';

const DEFAULT_DATA = {
  id: ' ',
  name: ' ',
  class: ' ',
  gender: ' ',
  grade: ' ',
  nhanXet: ' ',
  birthDate: ' ',
  football: false,
  volleyball: false

}

function App() {
  const [nextId, setNextId] = useState(1);
  const [data, setData] = useState(DEFAULT_DATA);
  const handleChange = (e) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.value;
    setData({...data, [key]: value});
  }

  const validate = () => {
    const isValid = true;
    return isValid;
  }
  const handleSubmitButton = () => {
    if(validate()) {
      alert("Ok")
    }
  }

  return (
    //khung to
    <div className="App m-2">
      {/* tao khung */}
      <div className="d-flex">
        {/* tạo khung bên trái */}
        <div style={{ width: "30%", border: "1px solid black" }} className="p-4">
          <form>

            <div className="form-group row">
              <label htmlFor="name" className="col-sm-4 col-form-label text-left">Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="class" className="col-sm-4 col-form-label text-left">Class</label>
              <div className="col-sm-8">
                <select className="form-control" id="class">
                  name="class"
                  value={data.class}
                  onChange={handleChange}
                  <option disabled={true} value="">Default select</option>
                  <option value="1">Class A</option>
                  <option value="2">Class B</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="gender" className="col-sm-4 col-form-label text-left">Gender</label>
              <div className="col-sm-8">
                <div style={{ textAlign: "left" }} className="form-check text-left">
                  <input className="form-check-input" type="radio" name="gender" id="gridRadios1" value="male"
                    checked={data.gender == 'male'}
                    onChange={handleChange}
                    />
                  <label class="form-check-label text-left" htmlfor="gridRadios1">
                    Male
                  </label>
                </div>

                <div style={{ textAlign: "left" }} class="form-check text-left">
                  <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="female"
                    name="gender"
                    checked={data.gender == 'female'}
                    onChange={handleChange}
                  />
                  <label class="form-check-label" htmlfor="gridRadios2">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='nhanXet' className='col-sm-4 col-form-label text-left'>Nhận Xét</label>
              <div className='col-sm-8'>
                <textarea type="text" className='form-control' id="nhanXet"
                name="nhanXet"
                value={data.nhanXet}
                onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="gender" className="col-sm-4 col-form-label text-left">Sở Thích</label>
              <div className="col-sm-8">
                <div style={{ textAlign: "left" }} className="form-check text-left">
                  <input className="form-check-input" type="checkbox" name="football" id="gridRadios1"

                  checked={data.football}
                  onChange={handleChange}
                  />
                  <label class="form-check-label text-left" htmlfor="gridRadios1">
                    Bóng Đá
                  </label>
                </div>

                <div style={{ textAlign: "left" }} class="form-check text-left">
                  <input class="form-check-input" type="checkbox" name="volleyball" id="gridRadios2" checked={data.volleyball}
                  onChange={handleChange}
                  />
                  <label class="form-check-label" htmlfor="gridRadios2">
                    Bóng Chuyền
                  </label>
                </div>

              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="grade" className="col-sm-4 col-form-label text-left">Grade</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="grade"
                name="grade"
                value={data.grade}
                onChange={handleChange}
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='birthday' className='col-sm-4 col-form-label text-left'>Ngày Sinh</label>
              <div className='col-sm-8'>
                <input type="date" className='form-control' id="name"
                name="birthDate"
                value={data.birthDate}
                onChange={handleChange}
                />
                <div className='invalid-feedback'></div>
              </div>
            </div>

            <div className='text-right '>
              <button type='button' className='btn btn-primary me-1' onClick={handleSubmitButton}>Create</button>
              <button type='button' className='btn btn-primary'>Cancel</button>
            </div>


          </form>
        </div>


        <div className="flex-grow-1 p-4 " style={{ width: "30%", border: "1px solid black", marginLeft: "12px" }}>

        <div className="form-group row">
              <label htmlFor="name" className=" offset-6 col-sm-1 col-form-label text-left">Search</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" id="name" />
              </div>
            </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col" style={{width: "50px"}}>No</th>
                <th scope="col">Name</th>
                <th scope="col">Class</th>
                <th scope="col">Gender</th>
                <th scope="col">Grade</th>
                <th scope="col" style={{width: "200px"}}>
                  <button className='btn btn-primary'><i className='fa fa-search'/></button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Name</td>
                <td>Class</td>
                <td>Gender</td>
                <td>Grade</td>
                <td>
                  <button className='btn btn-primary mr-1'><i className='fa fa-edit'/></button>
                  <button className='btn btn-success mr-1'><i className='fa fa-adjust'/></button>
                  <button className='btn btn-danger mr-1'><i className='fa fa-trash'/></button>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>
  );
}

export default App;
