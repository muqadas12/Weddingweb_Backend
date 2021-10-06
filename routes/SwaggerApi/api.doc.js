/**
 * @swagger
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
 * /api/users/gettingusers:
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
 *      summary: del dealer from  mongodb
 *      description: deleting dealer profile from mongodb database
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
 *       - Dealers
 *     description: Creates a new dealer
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
 * /api/updateuser/{id}:
 *  patch:
 *      description: Used to update message
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
