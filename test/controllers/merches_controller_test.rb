require 'test_helper'

class MerchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @merch = merches(:one)
  end

  test "should get index" do
    get merches_url, as: :json
    assert_response :success
  end

  test "should create merch" do
    assert_difference('Merch.count') do
      post merches_url, params: { merch: { description: @merch.description, img_url: @merch.img_url, link_to_merch: @merch.link_to_merch, title: @merch.title } }, as: :json
    end

    assert_response 201
  end

  test "should show merch" do
    get merch_url(@merch), as: :json
    assert_response :success
  end

  test "should update merch" do
    patch merch_url(@merch), params: { merch: { description: @merch.description, img_url: @merch.img_url, link_to_merch: @merch.link_to_merch, title: @merch.title } }, as: :json
    assert_response 200
  end

  test "should destroy merch" do
    assert_difference('Merch.count', -1) do
      delete merch_url(@merch), as: :json
    end

    assert_response 204
  end
end
