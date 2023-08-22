import React from 'react';
import UserCards from '../Components/userCards';

export default function Category() {
    const data = [
        {
            "_id": "64e3ae4f90b14a814a511d1a",
            "CategoryName": "sunscreen",
            "CategoryImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzKYRYf6A8AGk2FusQR7Oozi9Ui3wswdojw&usqp=CAU",
            "__v": 0
        },
        {
            "_id": "64e3ab0b90b14a814a511cf8",
            "CategoryName": "BodyLotion",
            "CategoryImage": "https://d1flfk77wl2xk4.cloudfront.net/Assets/17/271/XXL_p0186327117.jpg",
            "__v": 0
        },
        {
            "_id": "64e3aadc90b14a814a511cf4",
            "CategoryName": "BodyOil",
            "CategoryImage": "https://d1flfk77wl2xk4.cloudfront.net/Assets/65/494/XXL_p0186049465.jpg",
            "__v": 0
          },
          {
            "_id": "64e3add390b14a814a511d16",
            "CategoryName": "Moisturiz",
            "CategoryImage": "https://sokoglam.com/cdn/shop/files/Soko-Glam-PDP-Lador-Perfumed-Hair-Oil-Hinoki-01_360x.png?v=1689204907",
            "__v": 0
          },
    ];

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className="category-title">Discover Our Categories and Brands</h2>
                <p className="category-description">You name it, we have it!</p>
            </div>

            <div className="row my-5 category-list">
                {data.map((val, key) => (
                    <div key={key} className="col-md-4 category-item">
                        {val.CategoryName && val.CategoryImage && (
                            <UserCards image={val.CategoryImage} name={val.CategoryName} />
                        )}
                        {val.BrandName && val.BrandImage && (
                            <UserCards image={val.BrandImage} name={val.BrandName} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
