/**
 * @swagger
 *  tags:
 *    - user
 *
 * definitions:
 *   Dealer:
 *     properties:
 *
 *       serviceName:
 *         type: string
 *       dealerService:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: string
 *       email:
 *         type: string
 *       pathImg:
 *         type: file
 */

/**
 * @swagger
 * definitions:
 *   Users:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phoneNumber:
 *         type: string
 *       address:
 *         type: string
 *       password:
 *         type: string
 *       role:
 *         type: string
 *
 *
 */
/**
 * @swagger
 * definitions:
 *   AddServices:
 *     properties:
 *       serviceName:
 *         type: string
 *       dealerservice:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: string
 *       email:
 *         type: string
 *       pathImg:
 *         type: string
 *
 *
 */

/**
 * @swagger
 * /api/users/gettingDealers:
 *  get:
 *   description: Use to request all dealers
 *   responses:
 *    '200':
 *      description: A successful response
 */

/**
 * @swagger
 * /api/delUser/delete/{id}:
 *   delete:
 *      summary: del customer from  mongodb
 *      description: deleting customer profile from mongodb database
 *      parameters:
 *             - in: path
 *               name: id
 *               schema:
 *                  type: string
 *                  required: true
 *
 *      responses:
 *       200:
 *        description: delete user profile
 *
 *
 *
 */

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Users'
 *     responses:
 *       200:
 *         description: Successfully created
 */
/**
 * @swagger
 * /api/updatedDealersprofile/{id}:
 *  patch:
 *      description: Used to update dealer profile
 *      parameters:
 *          -   name:  id
 *              in:    path
 *              type: string
 *              required: true
 *
 *          -   name: name
 *              in:   body
 *              type: string
 *              required: true
 *              schema:
 *                  $ref: '#/definitions/Users'
 *      responses:
 *          '200':
 *              description: 'A successful response'
 */
/**
 * @swagger
 * /apiupdateDealerServices/{id}:
 *  patch:
 *      description: Used to update dealer service
 *      parameters:
 *          -   name:  id
 *              in:    path
 *              type: string
 *              required: true
 *
 *          -   name: name
 *              in:   body
 *              type: string
 *              required: true
 *              schema:
 *                  $ref: '#/definitions/AddServices'
 *      responses:
 *          '200':
 *              description: 'A successful response'
 */

/**
 * @swagger
 * /api/postdealer/post-dealers:
 *   post:
 *     tags:
 *       - AddServices
 *     description: Add a new service
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/AddServices'
 *     responses:
 *       200:
 *         description: Successfully services added
 */
