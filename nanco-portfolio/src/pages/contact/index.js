import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Button, FilledInput, FormControl, Icon, InputLabel} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './contact.css';

export default class Contact extends Component {
    state = {
        btnClass: 'disabled',
        btnActive: false,
    };

    handleCaptchaSuccess = (value) => {
        if (!!value) {
            this.setState({ btnClass: 'active', btnActive: true });
        }
    };

    render() {
        return (
            <div className="page-container contact">
                <p className="contact__title">Get in touch</p>
                <form
                    className="contact__form"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    method='post'
                    name="portfoliocontact"
                    // onSubmit={this.handleSubmit}
                    // netlify-honeypot="bot-field" DOES NOT WORK... :(
                >
                    <input type="hidden" name="form-name" value="portfoliocontact" />
                    {/*<input name="bot-field" /> DOES NOT WORK... :( */}
                    <FormControl fullWidth required variant='filled'>
                        <InputLabel
                            htmlFor="name"
                            classes={{
                                root: 'contact__form__label',
                                focused: 'contact__form__label--focused'
                            }}
                        >
                            Your name
                        </InputLabel>
                        <FilledInput
                            className='contact__form__input'
                            id="name"
                            name='name'
                            type="text"
                        />
                    </FormControl>
                    <FormControl fullWidth variant='filled'>
                        <InputLabel
                            htmlFor="phone-number"
                            classes={{
                                root: 'contact__form__label',
                                focused: 'contact__form__label--focused'
                            }}
                        >
                            Phone number
                        </InputLabel>
                        <FilledInput
                            className='contact__form__input'
                            id="phone-number"
                            name='phone-number'
                            type="text"
                        />
                    </FormControl>
                    <FormControl fullWidth required variant='filled'>
                        <InputLabel
                            htmlFor="email"
                            classes={{
                                root: 'contact__form__label',
                                focused: 'contact__form__label--focused'
                            }}
                        >
                            Email address
                        </InputLabel>
                        <FilledInput
                            className='contact__form__input'
                            id="email"
                            name="email"
                            type="email"
                        />
                    </FormControl>
                    <FormControl fullWidth required variant='filled'>
                        <InputLabel
                            htmlFor="message"
                            classes={{
                                root: 'contact__form__label',
                                focused: 'contact__form__label--focused'
                            }}
                        >
                            Message
                        </InputLabel>
                        <FilledInput
                            className='contact__form__input'
                            id="message"
                            type="text"
                            multiline={true}
                            name="message"
                            rows={7}
                        />
                    </FormControl>
                    <div className="contact__form__submit-wrapper">
                        <ReCAPTCHA
                            onChange={this.handleCaptchaSuccess}
                            // sitekey= {SITE_RECAPTCHA_KEY}
                            sitekey="6Lc3Xr8ZAAAAADxKp6zv61rgrJPSHzNWhMc3YJIS"
                            theme="dark"
                        />
                        <Button
                            className={'contact__form__submit-button--' + this.state.btnClass}
                            disabled={!this.state.btnActive}
                            endIcon={<SendIcon/>}
                            size='large'
                            type='submit'
                            variant="outlined"
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
};

// 6Lc5Xb8ZAAAAAM4jbxaQqB_xGI0IpebgvFhMeReP
