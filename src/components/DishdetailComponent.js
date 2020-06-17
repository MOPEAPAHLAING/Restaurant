import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments(dish){
        if(dish != null){
            const dishComment = dish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { yerar: 'nmeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    </div>
                )
            });
            return(
                <div>
                <h4>Comment</h4>
                {dishComment}
            </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null)
            return(
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dish={props.dish} />
                        </div>
                    </div>
                </div>
            )
    }

export default DishDetail;