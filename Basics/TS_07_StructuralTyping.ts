type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user-asfef23' };
let product: Product = { id: 'product-fwefw575' };

user = product;
product = user;

/**------------------------------------------------ */
type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 0, y: 10 };
let Point3D: Point3D = { x: 0, y: 10, z: 20 };

/** Extra info ok */
point2D = Point3D;
function takesPoint2D(point: Point2D) {
    /** ...*/
}
takesPoint2D(Point3D);

/** Error: missing info */
point3D = point2D;
function takesPoint3D(point: Point3D) {
    /** ... */
};
takesPoint3D(point2D);