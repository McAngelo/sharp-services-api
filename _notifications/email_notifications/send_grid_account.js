const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'michael@codAfric.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	});
}

const sendCloseAccountEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'support@codAfric.com',
		subject: 'Sorry you had to leave us!',
		text: `Thank you, ${name}. For using our app, is there anything you'd like us to improve? Let me know ...`
	});
}

const sendHiEmail = () => {
	console.log(process.env.SENDGRID_API_KEY);
	sgMail.send({
		to: 'mjohnson@seso.global',
		from: 'michael@codAfric.com',
		subject: 'Eureka!',
		text: `Hi Kafui, thanks for working with me`,
  		html: `<div style="box-sizing:border-box;width:100%;margin-bottom:30px;background:#ffffff;border:1px solid #f0f0f0"> 
				<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%"> 
					<tbody> 
						<tr> 
							<td style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding:30px" valign="top"> 
								<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%"> 
									<tbody> 
										<tr> 
											<td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top"> 
												<div id="m_-5712901532931829621block-one" style="box-sizing:border-box">
													
												</div>
												<h2 style="margin:0;margin-bottom:30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5;font-size:24px;color:#294661!important">
													Hi Kafui,
												</h2> 
												<p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">
													CodAfric has been able to successfully integrate with the SendGrid Email API, and we would like to inform you about it.
												</p> 
												<p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">
													We are sending you this email for the following:<br>
												</p> 
												<ul style="margin:0px 0px 10px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300;text-align:left"> 
													<li>
														<a style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none" href="http://www.codAfric.com" target="_blank" data-saferedirecturl="#">
															CodAfric</a>, on behalf of Michael Kwame Johnson says wonderful working with you
													</li> 
													<li>
														I needed to create the SendGrid account with a business email.
													</li> 
												</ul> 
												<div> 
													<br> 
												</div> 
												<p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">
													If you have anything you would like to discuss with us, feel free to contact us via 
													<a style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none" href="#" id="m_-5712901532931829621" target="_blank" data-saferedirecturl="#">mcangelo200@gmail.com</a> or phone call our 
													<a style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none" href="#" target="_blank" data-saferedirecturl="#">+233 24 5366 631</a>.
												</p> 
												<p style="margin:0;margin-bottom:10px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">
													Happy working with you,<br> 
													The CodAfric Team
												</p> 
											</td> 
										</tr> 
									</tbody> 
								</table>
							</td> 
						</tr> 
					</tbody> 
				</table> 
			</div>`
	});
}

module.exports = {
	sendWelcomeEmail,
	sendCloseAccountEmail,
	sendHiEmail
}