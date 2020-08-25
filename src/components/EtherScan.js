import React, { Component } from 'react'
import axios from 'axios'

import {appValues} from './AppValues'
import {secrets} from './Secrets'

class EtherScan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token_supply: 0,
            token_burned: 0
        }
    }

    // Only executed once
    // Perfect for requests
    async componentDidMount() {
        const token_supply_request = "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x7777770f8A6632ff043c8833310e245EBa9209E6&apikey=F1H66VY5U2MYJDE8J37GCZABCF2M17Y1TX";
        const burned_supply_request = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x7777770f8A6632ff043c8833310e245EBa9209E6&address=0x0000000000000000000000000000000000000001&tag=latest&apikey=F1H66VY5U2MYJDE8J37GCZABCF2M17Y1TX";

        console.log('token_supply_request: ', token_supply_request)
        console.log('burned_supply_request: ', burned_supply_request)

        await axios.get(token_supply_request)
            .then(res => {
                this.setState({
                    token_supply: res.data.result
                });
                console.log(res.data.result);
            })

        await axios.get(burned_supply_request)
            .then(res => {
                this.setState({
                    token_burned: res.data.result
                });
                console.log(res.data.result);
            });
    }

    render() {
        return (
            <div>
                TOB Total Supply: {this.state.token_supply}<br/>
                TOB Burned Supply: {this.state.token_burned}
            </div>
        )
    }
}

export default EtherScan