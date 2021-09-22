<template>
    <!-- Modal -->
    <div class="modal fade fill-in" id="invite_teammate" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg-custom">
            <div class="modal-content teammate_area">
                <div class="modal-header">
                    <h1>Contact a teammate</h1>
                    <button class="btn-cross" data-dismiss="modal" aria-hidden="true"><i class="far fa-times-circle"></i></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                       <div class="col-lg-12">
                            <div class="right_box">
                                <div class="d-flex justify-content-between align-items-center">
                                <h2>Contact info (required)</h2>
                                 <label class="check"><input type="checkbox" id="chkPassport" /><span>Bulk Upload</span></label>
                               </div>
                                <div class="d-block mb-4">
                                    <div id="dvPassport" style="display: none">
                                        <div class="col-lg-12 p-0">
                                           <div class="card-body no-scroll no-padding">
                                            <form action="/file-upload" class="dropzone no-margin">
                                              <div class="fallback">
                                                <input name="file" type="file" multiple />
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                    </div>
                                    <div id="AddPassport">
                                        <div class="col-lg-12 p-0">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label>First name</label>
                                                        <input type="text" class="form-control" placeholder="Enter the first name here" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label>Last name</label>
                                                        <input type="text" class="form-control" placeholder="Enter the last name here" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <label>Work email address (must end with @company email domain):</label>
                                                        <input type="text" class="form-control" placeholder="Enter the contact email address here" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group form-check">
                                                        <input type="checkbox" id="defaultCheck">
                                                        <label for="defaultCheck">
                                                            Cc me on the invite <a href="#" class="link" data-toggle="tooltip" title="Hooray!"><i class="zmdi zmdi-info-outline"></i></a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Email subject and message (required)</h2>
                                <div class="d-block mb-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Subject</label>
                                                <input type="text" class="form-control" placeholder="" value="Nnacell invites you to SecurityScorecard" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>Message <a href="#" class="link" data-toggle="tooltip" title="Hooray!"><i class="zmdi zmdi-info-outline"></i></a></label>
                                                <textarea class="form-control" placeholder=""></textarea>
                                                <small>Note: we’ll include information about SecurityScorecard at the bottom of the email message. Grade expectations, if set, will be included in the message as well.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Other settings (optional)</h2>
                                <div class="d-block">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group form-check">
                                                <input type="checkbox" id="defaultCheck1">
                                                <label for="defaultCheck1">
                                                    Set an expectation to maintain a grade of
                                                    <select class="form-select">
                                                        <option>B</option>
                                                    </select> and above
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group form-check">
                                                <input type="checkbox" id="defaultCheck2">
                                                <label for="defaultCheck2">
                                                    within
                                                    <select class="form-select">
                                                        <option>60</option>
                                                    </select> days
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group form-check">
                                                <input type="checkbox" id="defaultCheck3">
                                                <label for="defaultCheck3" class="w-100">
                                                    Send reminder to invitee within
                                                    <select class="form-select">
                                                        <option>10</option>
                                                    </select> days if invitation not accepted
                                                </label>
                                                <small>Note: if the receiver already has an account, they will be prompted to log in, instead of creating an account.</small>
                                            </div>
                                            <div class="form-group">
                                                <small>Please note: You will be contacting a person at another company. The receipient of this contact will be able to see your full name, company, and email. By submitting this contact you consent to SecurityScorecard using your information in this way.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer fixme">
                    <div class="text-right">
                        <button class="btn btn-default">Cancel</button>
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- Modal -->
</template>

<script>
export default {
    name: 'InviteTeammateModal'
}
</script>