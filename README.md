# Paypal price calc
This script is useful for anyone who needs to calculate the price of a product that will be payed through paypal, all you need to do is provide the amount of money you want to receive and the script will output the price you need to charge.

# Usage
- Download or clone the repository
- node app.js <Price wanted>

# Paypal fees
You probably will need to change the paypal fees that are hardcoded in the program, just open **app.js** in an editor and change the variables:

- **fixedFee**: Fixed fee that is charged (default **60 cents**)
- **percFee**: Percentual fee that is charged (default **4.79%**)
